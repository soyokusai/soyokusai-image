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
    const menuCardsContainer = document.querySelector('.menu-cards'); // メニューカードを挿入する親要素

    let currentFilterMode = null; 
    let allMenuData = []; // CSVから読み込んだ全てのメニューデータを保持する配列

    // CSVファイルを読み込む関数
    async function loadCSVData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const csvText = await response.text();
            return parseCSV(csvText);
        } catch (error) {
            console.error("CSVファイルの読み込みまたはパースに失敗しました:", error);
            return [];
        }
    }

    // CSVテキストをパースするシンプルな関数 (ヘッダー行をスキップし、カンマ区切りでデータを取得)
    function parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim()); // ヘッダー行を読み込む（必要なら使う）
        const data = [];

        for (let i = 1; i < lines.length; i++) { // ヘッダー行 (0番目) をスキップ
            const values = lines[i].split(',').map(v => v.trim());
            if (values.length === headers.length) {
                const item = {
                    menuName: values[0],
                    shopName: values[1],
                    allergens: values[2] ? values[2].split(',').map(a => a.trim()).filter(Boolean) : [],
                    crossContamination: values[3] ? values[3].split(',').map(c => c.trim()).filter(Boolean) : [],
                    note: values[4] || '' // 注記がなければ空文字列
                };
                data.push(item);
            }
        }
        return data;
    }

    // メニューカードを動的に生成し、表示する関数
    function renderMenuCards(menuDataToRender) {
        menuCardsContainer.innerHTML = ''; // 既存のカードをクリア
        if (menuDataToRender.length === 0) {
            menuCardsContainer.innerHTML = '<p>該当するメニューは見つかりませんでした。</p>';
            return;
        }

        menuDataToRender.forEach(menu => {
            const card = document.createElement('div');
            card.classList.add('menu-card');
            card.dataset.allergens = menu.allergens.join(',');
            card.dataset.crossContamination = menu.crossContamination.join(',');

            let allergensHtml = '';
            if (menu.allergens.length > 0) {
                allergensHtml += menu.allergens.map(allergen => `<li>${allergen}</li>`).join('');
            }
            if (menu.crossContamination.length > 0) {
                allergensHtml += menu.crossContamination.map(contam => `<li class="cross-contamination">${contam}</li>`).join('');
            }
            
            // 注記のHTMLを生成（注記があれば表示）
            const noteHtml = menu.note ? `<p class="menu-note">${menu.note}</p>` : '';

            card.innerHTML = `
                <h3>${menu.menuName}</h3>
                <p class="shop-name">${menu.shopName}</p>
                <ul class="allergens-info">
                    ${allergensHtml || ''}
                </ul>
                ${noteHtml}
                <a href="#" class="detail-button">詳細を見る</a>
            `;
            menuCardsContainer.appendChild(card);
        });
    }

    // ページ上の全ての模擬店名を抽出し、プルダウンに動的に追加する関数
    function populateShopNameSelect() {
        const shopNames = new Set();
        allMenuData.forEach(menu => { // allMenuDataから模擬店名を取得
            shopNames.add(menu.shopName);
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

        let filteredMenuData = allMenuData.filter(menu => {
            const menuAllergens = menu.allergens;
            const menuCrossContamination = menu.crossContamination;
            const menuShopName = menu.shopName;

            let passesAllergenFilter = true;
            let passesShopNameFilter = true;

            // 1. アレルギー絞り込みの適用
            if (currentFilterMode) { 
                if (selectedAllergens.length === 0) {
                    passesAllergenFilter = true;
                } else {
                    let targetAllergensInMenu = [...menuAllergens].filter(Boolean);
                    if (includeCrossContamination) {
                        targetAllergensInMenu = [...targetAllergensInMenu, ...menuCrossContamination].filter(Boolean);
                    }
                    targetAllergensInMenu = [...new Set(targetAllergensInMenu)];

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
                passesShopNameFilter = (menuShopName === selectedShopName);
            }

            return passesAllergenFilter && passesShopNameFilter;
        });

        renderMenuCards(filteredMenuData); // 絞り込まれたデータを描画
    }

    // イベントリスナーの登録
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
        applyFilters(); // 全てリセットして再適用（結果的に全表示）
    });
    
    // 初期化処理
    async function initialize() {
        allMenuData = await loadCSVData('menu_data.csv'); // CSVファイル名を指定
        populateShopNameSelect();
        renderMenuCards(allMenuData); // 初期表示は全メニュー
    }

    initialize(); // ページロード時に初期化関数を実行
});
/* ====================================
 * JavaScript END
 * ==================================== */