/* ====================================
 * JavaScript START
 * ==================================== */
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[name="allergen"]');
    const includeButton = document.getElementById('include-button');
    const excludeButton = document.getElementById('exclude-button');
    const includeCrossContaminationCheckbox = document.getElementById('include-cross-contamination-checkbox');
    const shopNameSelect = document.getElementById('shop-name-select');
    const shopNameSearchButton = document.getElementById('shop-name-search-button');
    const resetAllButton = document.getElementById('reset-all-button'); 
    // const menuCardsContainer = document.querySelector('.menu-cards'); // この行はもう不要

    let currentFilterMode = null; 
    let allMenuCards = Array.from(document.querySelectorAll('.menu-card')); // HTMLから直接メニューカードを取得

    // ページ上の全ての模擬店名を抽出し、プルダウンに動的に追加する関数
    function populateShopNameSelect() {
        const shopNames = new Set();
        allMenuCards.forEach(card => { // DOMから取得したカードから模擬店名を取得
            const shopNameElement = card.querySelector('.shop-name');
            if (shopNameElement) {
                shopNames.add(shopNameElement.textContent.trim());
            }
        });

        while (shopNameSelect.options.length > 1) { 
            shopNameSelect.remove(1);
        }

        Array.from(shopNames).sort().forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            shopNameSelect.appendChild(option);
        });
    }

    // メニューを絞り込むメイン関数
    function applyFilters() {
        const selectedAllergens = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        const selectedShopName = shopNameSelect.value;
        const includeCrossContamination = includeCrossContaminationCheckbox.checked;

        allMenuCards.forEach(card => { // 既存のカードを直接操作
            const cardAllergens = card.dataset.allergens ? card.dataset.allergens.split(',').filter(Boolean) : [];
            const cardCrossContamination = card.dataset.crossContamination ? card.dataset.crossContamination.split(',').filter(Boolean) : [];
            const cardShopName = card.querySelector('.shop-name').textContent.trim();

            let passesAllergenFilter = true;
            let passesShopNameFilter = true;

            // 1. アレルギー絞り込みの適用
            if (currentFilterMode) { 
                if (selectedAllergens.length === 0) {
                    passesAllergenFilter = true;
                } else {
                    let targetAllergensInMenu = [...cardAllergens];
                    if (includeCrossContamination) {
                        targetAllergensInMenu = [...targetAllergensInMenu, ...cardCrossContamination];
                    }
                    targetAllergensInMenu = [...new Set(targetAllergensInMenu)]; // 重複除去

                    if (currentFilterMode === 'include') {
                        passesAllergenFilter = selectedAllergens.every(selectedAllergen =>
                            targetAllergensInMenu.includes(selectedAllergen)
                        );
                    } else if (currentFilterMode === 'exclude') {
                        passesAllergenFilter = !selectedAllergens.some(selectedAllergen =>
                            targetAllergensInMenu.includes(selectedAllergen)
                        );
                    }
                }
            }

            // 2. 模擬店名絞り込みの適用
            if (selectedShopName !== "") {
                passesShopNameFilter = (cardShopName === selectedShopName);
            }

            // 両方のフィルターを通過した場合のみ表示
            if (passesAllergenFilter && passesShopNameFilter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // イベントリスナーの登録（変更なし）
    includeButton.addEventListener('click', () => {
        currentFilterMode = 'include';
        applyFilters();
    });

    excludeButton.addEventListener('click', () => {
        currentFilterMode = 'exclude';
        applyFilters();
    });

    shopNameSearchButton.addEventListener('click', () => {
        applyFilters();
    });

    resetAllButton.addEventListener('click', () => {
        checkboxes.forEach(cb => cb.checked = false);
        currentFilterMode = null;
        includeCrossContaminationCheckbox.checked = false;
        shopNameSelect.value = ''; 
        applyFilters();
    });
    
    // 初期化処理
    // HTMLにベタ書きなので、CSV読み込みは不要
    populateShopNameSelect(); // ページロード時に模擬店プルダウンを生成
    applyFilters(); // 初期表示は全メニュー
});
/* ====================================
 * JavaScript END
 * ==================================== */