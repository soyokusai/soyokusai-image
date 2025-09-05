const timetables = [
    {
        title: '体育館',
        location: '県相 体育館',
        events: [
            { title: 'KENSO BRASS 2025 【吹奏楽部】〈県相生ONLY〉', start: '2025-09-05T13:15:00+09:00', end: '2025-09-05T13:30:00+09:00'},
            { title: 'KENSO CHEERS 61×62 【応援団部】〈県相生ONLY〉', start: '2025-09-05T13:40:00+09:00', end: '2025-09-05T13:55:00+09:00'},
            { title: 'KENSONIC in相翼祭preSP ver〈県相生ONLY〉', start: '2025-09-05T14:30:00+09:00', end: '2025-09-05T14:45:00+09:00'},
            { title: 'KENSO BRASS 2025 【吹奏楽部】', start: '2025-09-06T10:20:00+09:00', end: '2025-09-06T11:10:00+09:00'},
            { title: 'KENSO CHEERS 61×62 【応援団部】', start: '2025-09-06T11:30:00+09:00', end: '2025-09-06T12:10:00+09:00'},
            { title: 'マンドリンコンサート 【マンドリン部】', start: '2025-09-06T12:20:00+09:00', end: '2025-09-06T13:05:00+09:00'},
            { title: '翔 【書道部】', start: '2025-09-06T13:15:00+09:00', end: '2025-09-06T13:55:00+09:00'},
            { title: 'KENSONIC ～文化祭 special～ 【軽音楽部/歩行者天国】', start: '2025-09-07T10:00:00+09:00', end: '2025-09-07T10:10:00+09:00'},
            { title: 'KENSONIC ～文化祭 special～ 【軽音楽部/Genesis】', start: '2025-09-07T10:15:00+09:00', end: '2025-09-07T10:25:00+09:00'},
            { title: 'KENSONIC ～文化祭 special～ 【軽音楽部/Solaris】', start: '2025-09-07T10:30:00+09:00', end: '2025-09-07T10:40:00+09:00'},
            { title: 'KENSONIC ～文化祭 special～ 【軽音楽部/White Spirit Station】', start: '2025-09-07T10:45:00+09:00', end: '2025-09-07T10:55:00+09:00'},
            { title: 'KENSONIC ～文化祭 special～ 【軽音楽部/Neo ALiS】', start: '2025-09-07T11:10:00+09:00', end: '2025-09-07T11:25:00+09:00'},
            { title: 'KENSONIC ～文化祭 special～ 【軽音楽部/Snow F!ake】', start: '2025-09-07T11:30:00+09:00', end: '2025-09-07T11:45:00+09:00'},
            { title: 'KENSONIC ～文化祭 special～ 【軽音楽部/Titanic Swan】', start: '2025-09-07T11:50:00+09:00', end: '2025-09-07T12:05:00+09:00'},
            { title: 'KENSONIC ～文化祭 special～ 【軽音楽部/Nextarts】', start: '2025-09-07T12:10:00+09:00', end: '2025-09-07T12:25:00+09:00'},
        ]
    },
    {
        title: '各教室 (1年のみ)',
        events: [
            { title: '県相の七不思議 【1年B組】', start: '2025-09-06T10:15:00+09:00', end: '2025-09-06T10:45:00+09:00', location: 'A棟3階 1B教室' },
            { title: '県相の七不思議 【1年B組】', start: '2025-09-06T11:00:00+09:00', end: '2025-09-06T11:30:00+09:00', location: 'A棟3階 1B教室' },
            { title: '県相の七不思議 【1年B組】', start: '2025-09-06T11:45:00+09:00', end: '2025-09-06T12:15:00+09:00', location: 'A棟3階 1B教室' },
            { title: '県相の七不思議 【1年B組】', start: '2025-09-06T13:30:00+09:00', end: '2025-09-06T14:00:00+09:00', location: 'A棟3階 1B教室' },
            { title: '県相の七不思議 【1年B組】', start: '2025-09-06T14:15:00+09:00', end: '2025-09-06T14:45:00+09:00', location: 'A棟3階 1B教室' },
            { title: 'C雪姫と39人の生徒たち 【1年C組】', start: '2025-09-06T10:30:00+09:00', end: '2025-09-06T10:45:00+09:00', location: 'A棟3階 1C教室' },
            { title: 'C雪姫と39人の生徒たち 【1年C組】', start: '2025-09-06T11:10:00+09:00', end: '2025-09-06T11:25:00+09:00', location: 'A棟3階 1C教室' },
            { title: 'C雪姫と39人の生徒たち 【1年C組】', start: '2025-09-06T12:30:00+09:00', end: '2025-09-06T12:45:00+09:00', location: 'A棟3階 1C教室' },
            { title: 'C雪姫と39人の生徒たち 【1年C組】', start: '2025-09-06T13:10:00+09:00', end: '2025-09-06T13:25:00+09:00', location: 'A棟3階 1C教室' },
            { title: 'C雪姫と39人の生徒たち 【1年C組】', start: '2025-09-06T13:50:00+09:00', end: '2025-09-06T14:05:00+09:00', location: 'A棟3階 1C教室' },
            { title: 'Reminiscence ～古の英雄たち～ 【1年E組】', start: '2025-09-06T10:00:00+09:00', end: '2025-09-06T10:10:00+09:00', location: 'A棟3階 1E教室' },
            { title: 'Reminiscence ～古の英雄たち～ 【1年E組】', start: '2025-09-06T11:00:00+09:00', end: '2025-09-06T11:10:00+09:00', location: 'A棟3階 1E教室' },
            { title: 'Reminiscence ～古の英雄たち～ 【1年E組】', start: '2025-09-06T13:30:00+09:00', end: '2025-09-06T13:40:00+09:00', location: 'A棟3階 1E教室' },
            { title: 'Reminiscence ～古の英雄たち～ 【1年E組】', start: '2025-09-06T14:30:00+09:00', end: '2025-09-06T14:40:00+09:00', location: 'A棟3階 1E教室' },
            { title: 'KENSO TV 【1年F組】', start: '2025-09-06T11:30:00+09:00', end: '2025-09-06T11:50:00+09:00', location: 'A棟3階 1F教室' },
            { title: 'KENSO TV 【1年F組】', start: '2025-09-06T10:30:00+09:00', end: '2025-09-06T10:50:00+09:00', location: 'A棟3階 1F教室' },
            { title: 'KENSO TV 【1年F組】', start: '2025-09-06T13:30:00+09:00', end: '2025-09-06T13:50:00+09:00', location: 'A棟3階 1F教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-06T10:30:00+09:00', end: '2025-09-06T10:50:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-06T11:00:00+09:00', end: '2025-09-06T11:20:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-06T11:30:00+09:00', end: '2025-09-06T11:50:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-06T13:00:00+09:00', end: '2025-09-06T13:20:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-06T13:30:00+09:00', end: '2025-09-06T13:50:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-06T14:00:00+09:00', end: '2025-09-06T14:20:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-06T14:30:00+09:00', end: '2025-09-06T14:50:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'Reminiscence ～古の英雄たち～ 【1年E組】', start: '2025-09-07T10:00:00+09:00', end: '2025-09-07T10:10:00+09:00', location: 'A棟3階 1E教室' },
            { title: '県相の七不思議 【1年B組】', start: '2025-09-07T10:15:00+09:00', end: '2025-09-07T10:45:00+09:00', location: 'A棟3階 1B教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-07T10:30:00+09:00', end: '2025-09-07T10:50:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'C雪姫と39人の生徒たち 【1年C組】', start: '2025-09-07T10:30:00+09:00', end: '2025-09-07T10:45:00+09:00', location: 'A棟3階 1C教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-07T11:00:00+09:00', end: '2025-09-07T11:20:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'Reminiscence ～古の英雄たち～ 【1年E組】', start: '2025-09-07T11:00:00+09:00', end: '2025-09-07T11:10:00+09:00', location: 'A棟3階 1E教室' },
            { title: '県相の七不思議 【1年B組】', start: '2025-09-07T11:00:00+09:00', end: '2025-09-07T11:30:00+09:00', location: 'A棟3階 1B教室' },
            { title: 'C雪姫と39人の生徒たち 【1年C組】', start: '2025-09-07T11:10:00+09:00', end: '2025-09-07T11:25:00+09:00', location: 'A棟3階 1C教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-07T11:30:00+09:00', end: '2025-09-07T11:50:00+09:00', location: 'B棟2階 2G教室' },
            { title: '県相の七不思議 【1年B組】', start: '2025-09-07T11:45:00+09:00', end: '2025-09-07T12:15:00+09:00', location: 'A棟3階 1B教室' },
            { title: 'C雪姫と39人の生徒たち 【1年C組】', start: '2025-09-07T12:30:00+09:00', end: '2025-09-07T12:45:00+09:00', location: 'A棟3階 1C教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-07T13:00:00+09:00', end: '2025-09-07T13:20:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'C雪姫と39人の生徒たち 【1年C組】', start: '2025-09-07T13:10:00+09:00', end: '2025-09-07T13:25:00+09:00', location: 'A棟3階 1C教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-07T13:30:00+09:00', end: '2025-09-07T13:50:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'Reminiscence ～古の英雄たち～ 【1年E組】', start: '2025-09-07T13:30:00+09:00', end: '2025-09-07T13:40:00+09:00', location: 'A棟3階 1E教室' },
            { title: '県相の七不思議 【1年B組】', start: '2025-09-07T13:30:00+09:00', end: '2025-09-07T14:00:00+09:00', location: 'A棟3階 1B教室' },
            { title: 'C雪姫と39人の生徒たち 【1年C組】', start: '2025-09-07T13:50:00+09:00', end: '2025-09-07T14:05:00+09:00', location: 'A棟3階 1C教室' },
            { title: 'アラG 【1年G組】', start: '2025-09-07T14:00:00+09:00', end: '2025-09-07T14:20:00+09:00', location: 'B棟2階 2G教室' },
            { title: 'KENSO TV 【1年F組】', start: '2025-09-07T10:00:00+09:00', end: '2025-09-07T10:20:00+09:00', location: 'A棟3階 1F教室' },
            { title: 'KENSO TV 【1年F組】', start: '2025-09-07T11:00:00+09:00', end: '2025-09-07T11:20:00+09:00', location: 'A棟3階 1F教室' },
            { title: 'KENSO TV 【1年F組】', start: '2025-09-07T13:00:00+09:00', end: '2025-09-07T13:20:00+09:00', location: 'A棟3階 1F教室' },
            { title: 'KENSO TV 【1年F組】', start: '2025-09-07T14:00:00+09:00', end: '2025-09-07T14:20:00+09:00', location: 'A棟3階 1F教室' },
        ]
    },
    {
        title: '各教室 (各部活)',
        events: [
            { title: '月虹 【茶道部】', start: '2025-09-06T11:00:00+09:00', end: '2025-09-06T11:30:00+09:00', location: 'B棟1階 3D教室' },
            { title: '月虹 【茶道部】', start: '2025-09-06T11:30:00+09:00', end: '2025-09-06T12:00:00+09:00', location: 'B棟1階 3D教室' },
            { title: '月虹 【茶道部】', start: '2025-09-06T12:00:00+09:00', end: '2025-09-06T12:30:00+09:00', location: 'B棟1階 3D教室' },
            { title: '科学のすゝめ 〈水中花火〉【科学研究部】', start: '2025-09-06T10:30:00+09:00', end: '2025-09-06T10:45:00+09:00', location: 'C棟1階 生物室' },
            { title: '科学のすゝめ 〈粉塵爆発〉【科学研究部】', start: '2025-09-06T12:30:00+09:00', end: '2025-09-06T12:45:00+09:00', location: 'C棟1階 生物室' },
            { title: '科学のすゝめ 〈炎色反応〉【科学研究部】', start: '2025-09-06T14:30:00+09:00', end: '2025-09-06T14:45:00+09:00', location: 'C棟1階 生物室' },
            { title: 'Excellent Debate by Kenso Debaters 【英語ディベート部】', start: '2025-09-06T13:30:00+09:00', end: '2025-09-06T14:15:00+09:00', location: 'C棟3階 3選α教室' },
            { title: 'あなたは県相生より賢いの？ 【クイズ研究部】', start: '2025-09-06T10:00:00+09:00', end: '2025-09-06T10:30:00+09:00', location: 'C棟1階 社会科教室' },
            { title: 'あなたは県相生より賢いの？ 【クイズ研究部】', start: '2025-09-06T13:00:00+09:00', end: '2025-09-06T13:30:00+09:00', location: 'C棟1階 社会科教室' },
            { title: 'あなたは県相生より賢いの？ 【クイズ研究部】', start: '2025-09-07T10:00:00+09:00', end: '2025-09-07T10:30:00+09:00', location: 'C棟1階 社会科教室' },
            { title: '科学のすゝめ 〈水ロケット〉【科学研究部】', start: '2025-09-07T10:30:00+09:00', end: '2025-09-07T10:45:00+09:00', location: '昇降口前' },
            { title: '月虹 【茶道部】', start: '2025-09-07T11:00:00+09:00', end: '2025-09-07T11:30:00+09:00', location: 'B棟1階 3D教室' },
            { title: '月虹 【茶道部】', start: '2025-09-07T11:30:00+09:00', end: '2025-09-07T12:00:00+09:00', location: 'B棟1階 3D教室' },
            { title: '月虹 【茶道部】', start: '2025-09-07T12:00:00+09:00', end: '2025-09-07T12:30:00+09:00', location: 'B棟1階 3D教室' },
            { title: '科学のすゝめ 〈テルミット反応〉【科学研究部】', start: '2025-09-07T12:30:00+09:00', end: '2025-09-07T12:45:00+09:00', location: 'C棟1階 生物室' },
            { title: 'あなたは県相生より賢いの？ 【クイズ研究部】', start: '2025-09-07T13:00:00+09:00', end: '2025-09-07T13:30:00+09:00', location: 'C棟1階 社会科教室' },
            { title: 'Excellent Debate by Kenso Debaters 【英語ディベート部】', start: '2025-09-07T13:30:00+09:00', end: '2025-09-07T14:15:00+09:00', location: 'C棟3階 3選α教室' },
            { title: '科学のすゝめ 〈液体窒素〉【科学研究部】', start: '2025-09-07T14:30:00+09:00', end: '2025-09-07T14:45:00+09:00', location: '昇降口前' },
        ]
    }
];

// 【】内の文字列を抽出するヘルパー関数
function getGroupKey(title) {
    const match = title.match(/【(.*?)】/);
    return match ? match[1] : title;
}

// 【】内の文字列を削除するヘルパー関数
function removeGroupKey(title) {
    return title.replace(/【(.*?)】/, '').trim();
}

// 時刻表示のオプション
const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
};

function updateTimetables() {
    const now = new Date();
    const container = document.getElementById('timetable-container');
    container.innerHTML = '';

    timetables.forEach(timetable => {
        const section = document.createElement('div');
        section.className = 'timetable-section';
        
        let sectionHtml = `<h2>${timetable.title}</h2>`;
        
        if (timetable.title === '体育館') {
            sectionHtml += `<h4>開催場所: ${timetable.location}</h4>`;
            
            const currentEvents = [];
            let nextEvent = null;
            let nextEventFound = false;

            timetable.events.sort((a, b) => new Date(a.start) - new Date(b.start));

            for (const event of timetable.events) {
                const startTime = new Date(event.start);
                const endTime = new Date(event.end);
                
                if (now >= startTime && now <= endTime) {
                    currentEvents.push(event);
                } else if (now < startTime && !nextEventFound) {
                    nextEvent = event;
                    nextEventFound = true;
                }
            }

            const currentHtml = currentEvents.length > 0
                ? currentEvents.map(event => `<h4>${event.title}</h4><p>${new Date(event.start).toLocaleString('ja-JP', timeOptions)} - ${new Date(event.end).toLocaleTimeString('ja-JP', timeOptions)}</p>`).join('')
                : `<p class="no-event">現在開催中の企画はありません。</p>`;
            
            const nextHtml = nextEvent
                ? `<h4>${nextEvent.title}</h4><p>${new Date(nextEvent.start).toLocaleString('ja-JP', timeOptions)} - ${new Date(nextEvent.end).toLocaleTimeString('ja-JP', timeOptions)}</p>`
                : `<p class="no-event">本日以降の企画はありません。</p>`;
            
            sectionHtml += `
                <div>
                    <h3>現在開催中</h3>
                    <div>${currentHtml}</div>
                </div>
                <div>
                    <h3>次に開催</h3>
                    <div>${nextHtml}</div>
                </div>
            `;
            
        } else {
            const groupedEvents = {};
            timetable.events.sort((a, b) => new Date(a.start) - new Date(b.start)).forEach(event => {
                const groupKey = getGroupKey(event.title);
                if (!groupedEvents[groupKey]) {
                    groupedEvents[groupKey] = {
                        usualLocation: event.location,
                        events: []
                    };
                }
                groupedEvents[groupKey].events.push(event);
            });

            const groupedHtml = Object.keys(groupedEvents).map(groupKey => {
                const group = groupedEvents[groupKey];
                const currentEvents = [];
                let nextEvent = null;
                let nextEventFound = false;

                for (const event of group.events) {
                    const startTime = new Date(event.start);
                    const endTime = new Date(event.end);
                    
                    if (now >= startTime && now <= endTime) {
                        currentEvents.push(event);
                    } else if (now < startTime && !nextEventFound) {
                        nextEvent = event;
                        nextEventFound = true;
                    }
                }
                
                const currentHtml = currentEvents.length > 0
                    ? currentEvents.map(event => {
                        const isUnusual = event.location !== group.usualLocation;
                        const locationClass = isUnusual ? 'unusual-location' : '';
                        return `
                            <p class="event-title">${removeGroupKey(event.title)}</p>
                            <p class="location-display ${locationClass}">開催場所: ${event.location}</p>
                            <p>${new Date(event.start).toLocaleString('ja-JP', timeOptions)} - ${new Date(event.end).toLocaleTimeString('ja-JP', timeOptions)}</p>
                        `;
                    }).join('')
                    : `<p class="no-event">現在開催中の企画はありません。</p>`;
                
                const nextHtml = nextEvent
                    ? (() => {
                        const isUnusual = nextEvent.location !== group.usualLocation;
                        const locationClass = isUnusual ? 'unusual-location' : '';
                        return `
                            <p class="event-title">${removeGroupKey(nextEvent.title)}</p>
                            <p class="location-display ${locationClass}">開催場所: ${nextEvent.location}</p>
                            <p>${new Date(nextEvent.start).toLocaleString('ja-JP', timeOptions)} - ${new Date(nextEvent.end).toLocaleTimeString('ja-JP', timeOptions)}</p>
                        `;
                    })()
                    : `<p class="no-event">本日以降の企画はありません。</p>`;
                
                return `
                    <div class="grouped-event">
                        <h3>【${groupKey}】</h3>
                        <div class="status-box current-event-box">
                            <h5>現在開催中</h5>
                            <div class="current-event-container">
                                ${currentHtml}
                            </div>
                        </div>
                        <div class="status-box">
                            <h5>次に開催</h5>
                            ${nextHtml}
                        </div>
                    </div>
                `;
            }).join('');
            
            sectionHtml += `<div class="timetable-grouped">${groupedHtml}</div>`;
        }
        
        section.innerHTML = sectionHtml;
        container.appendChild(section);
    });
}

updateTimetables();
setInterval(updateTimetables, 60000);