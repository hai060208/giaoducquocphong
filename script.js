const rolesData = [
    {
        id: 'tccs',
        name: 'Tổng cục Chính trị',
        icon: '<i class="ph-fill ph-book-open"></i>',
        color: 'red',
        title: 'Lãnh đạo, Giáo dục Chính trị',
        missions: [
            'Đảm bảo sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng đối với Quân đội.',
            'Thực hiện công tác tư tưởng, tuyên truyền, giáo dục chính trị và pháp luật.',
            'Chỉ đạo công tác Đảng, công tác dân vận, chính sách xã hội trong toàn quân.'
        ],
        forces: 'Cơ quan chỉ đạo chiến lược về chính trị, có mặt tại tất cả các đơn vị.'
    },
    {
        id: 'tchc',
        name: 'Tổng cục Hậu cần',
        icon: '<i class="ph-fill ph-truck"></i>',
        color: 'yellow',
        title: 'Đảm bảo Hậu cần & Quân y',
        missions: [
            'Cung cấp đầy đủ, kịp thời vật chất, quân trang, lương thực, thuốc men, nhiên liệu.',
            'Quản lý hệ thống kho tàng, doanh trại, vận tải và bảo đảm quân y.',
            'Nghiên cứu, phát triển công tác hậu cần trong chiến đấu và thời bình.'
        ],
        forces: 'Cục Quân nhu, Cục Xăng dầu, Cục Vận tải, hệ thống Bệnh viện Quân đội.'
    },
    {
        id: 'tckt',
        name: 'Tổng cục Kỹ thuật',
        icon: '<i class="ph-fill ph-gear-six"></i>',
        color: 'green',
        title: 'Bảo trì & Phát triển Kỹ thuật',
        missions: [
            'Quản lý, bảo dưỡng, sửa chữa và hiện đại hóa vũ khí, khí tài, trang bị kỹ thuật.',
            'Bảo đảm đồng bộ các loại vũ khí, trang bị kỹ thuật cho Quân đội.',
            'Nghiên cứu, ứng dụng khoa học công nghệ vào lĩnh vực kỹ thuật quân sự.'
        ],
        forces: 'Các nhà máy Z, Viện Nghiên cứu Kỹ thuật Quân sự, cơ quan Kỹ thuật các Quân chủng.'
    },
    {
        id: 'luc-quan',
        name: 'Quân chủng Lục quân',
        icon: '<i class="ph-fill ph-shield-chevron"></i>',
        color: 'red',
        title: 'Tác chiến Mặt đất & Phòng thủ',
        missions: [
            'Là lực lượng tác chiến chủ yếu trên bộ, thực hiện các chiến dịch phòng thủ và tấn công.',
            'Tổ chức huấn luyện, SSCĐ cho các binh chủng: Bộ binh, Tăng Thiết giáp, Pháo binh, Đặc công.',
            'Tham gia công tác dân vận, xây dựng cơ sở chính trị vững mạnh ở địa phương.'
        ],
        forces: 'Các Quân đoàn, Quân khu, các Sư đoàn, Trung đoàn Bộ binh/Cơ giới.'
    },
    {
        id: 'hải-quân',
        name: 'Quân chủng Hải quân',
        icon: '<i class="ph-fill ph-anchor"></i>',
        color: 'blue',
        title: 'Bảo vệ Chủ quyền Biển, Đảo',
        missions: [
            'Quản lý, bảo vệ chủ quyền vùng biển, đảo, thềm lục địa quốc gia.',
            'Ngăn chặn các hành vi xâm phạm chủ quyền và các hoạt động bất hợp pháp trên biển.',
            'Tham gia tìm kiếm, cứu hộ, cứu nạn, giúp đỡ ngư dân khi gặp sự cố trên biển.'
        ],
        forces: 'Các Vùng Hải quân, Lữ đoàn Tàu chiến, Tàu ngầm, Lính thủy đánh bộ, Không quân Hải quân.'
    },
    {
        id: 'pk-kq',
        name: 'Phòng không - Không quân',
        icon: '<i class="ph-fill ph-airplane-tilt"></i>',
        color: 'green',
        title: 'Kiểm soát & Bảo vệ Vùng trời',
        missions: [
            'Quản lý, bảo vệ vùng trời, không phận quốc gia và các mục tiêu trọng yếu trên mặt đất.',
            'Huấn luyện và duy trì SSCĐ của các lực lượng phòng không và không quân (máy bay chiến đấu).',
            'Tham gia tìm kiếm, cứu nạn trên không và hỗ trợ hỏa lực.'
        ],
        forces: 'Các Sư đoàn Không quân, Sư đoàn Tên lửa Phòng không, Sư đoàn Radar.'
    },
    {
        id: 'bdbp',
        name: 'Bộ đội Biên phòng',
        icon: '<i class="ph-fill ph-buildings"></i>',
        color: 'yellow',
        title: 'Quản lý & An ninh Biên giới',
        missions: [
            'Quản lý, bảo vệ chủ quyền lãnh thổ và an ninh biên giới quốc gia (biên giới đất liền và biển).',
            'Kiểm soát xuất nhập cảnh tại cửa khẩu; phòng chống buôn lậu và tội phạm xuyên quốc gia.',
            'Thực hiện công tác dân vận, xây dựng các xã biên giới vững mạnh.'
        ],
        forces: 'Các đồn Biên phòng, Hải đội Biên phòng, Lực lượng kiểm soát cửa khẩu.'
    },
    {
        id: 'csb',
        name: 'Cảnh sát biển',
        icon: '<i class="ph-fill ph-lifebuoy"></i>',
        color: 'blue',
        title: 'Thực thi Pháp luật trên biển',
        missions: [
            'Thực thi pháp luật, giữ gìn an ninh, trật tự, an toàn trên các vùng biển và thềm lục địa Việt Nam.',
            'Phòng chống tội phạm buôn lậu, gian lận thương mại và khai thác trái phép tài nguyên biển.',
            'Tham gia tìm kiếm, cứu hộ, cứu nạn tàu thuyền gặp nạn trên biển.'
        ],
        forces: 'Các Vùng Cảnh sát biển, các Biên đội tàu tuần tra và các đơn vị phòng chống tội phạm.'
    }
];

const tabsContainer = document.getElementById('tabs-container');
const contentContainer = document.getElementById('content-container');

function createContentCard(role) {
    const card = document.createElement('div');
    card.id = role.id;
    const borderColorClass = `border-${role.color}-600`;
    card.className = `main-card p-6 md:p-10 rounded-2xl border-l-4 ${borderColorClass} bg-white ${role.id === 'tccs' ? 'relative w-full' : 'hidden absolute top-0 left-0 w-full'}`;

    card.innerHTML = `
        <div class="flex items-start mb-8 border-b pb-4 border-gray-100">
            <span class="icon-container mr-4 text-${role.color}-700">${role.icon}</span>
            <div>
                <h3 class="text-3xl font-extrabold text-${role.color}-700">${role.name}</h3>
                <p class="text-lg text-gray-600 mt-1 font-semibold">${role.title}</p>
            </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
                <h4 class="text-xl font-bold mb-4 text-gray-800 border-b-2 pb-1">Nhiệm vụ Chi tiết:</h4>
                <ul class="list-disc pl-5 space-y-3 text-gray-700 text-base">
                    ${role.missions.map(m => `<li class="hover:text-gray-900 transition duration-150">${m}</li>`).join('')}
                </ul>
            </div>
            
            <div class="md:col-span-1 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-inner">
                <h4 class="text-xl font-bold mb-3 text-gray-800 border-b pb-1">Đặc điểm Tổ chức:</h4>
                <p class="text-gray-700 text-sm leading-relaxed">${role.forces}</p>
                <i class="ph-fill ph-star-four text-4xl mt-4 text-gray-400 block text-right"></i>
            </div>
        </div>
    `;
    contentContainer.appendChild(card);
}

function createTabButton(role, isActive) {
    const button = document.createElement('button');
    button.dataset.target = role.id;
    const hoverClass = `hover:bg-${role.color}-100`;
    button.className = `tab-btn relative py-3 px-2 rounded-xl font-bold text-center bg-gray-100 text-gray-800 ${hoverClass} transition duration-300`;
    if (isActive) button.classList.add('active');
    button.innerHTML = `
        <span class="icon-container block mb-1 mx-auto text-${role.color}-600">${role.icon}</span>
        <span class="text-xs md:text-sm leading-tight">${role.name}</span>
        <span class="tooltip">${role.title}</span>
    `;
    tabsContainer.appendChild(button);
}

function setupInteractions() {
    rolesData.forEach((role, index) => {
        const isActive = index === 0;
        createTabButton(role, isActive);
        createContentCard(role);
    });

    const tabButtons = document.querySelectorAll('.tab-btn');
    const contentPanels = document.querySelectorAll('.main-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            contentPanels.forEach(panel => {
                panel.classList.add('hidden');
                if (panel.id === targetId) {
                    setTimeout(() => panel.classList.remove('hidden'), 50);
                }
            });
        });
    });
}

setupInteractions();
