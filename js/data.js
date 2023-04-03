const categories = [
    {
        title: "Обязательные для всех",
        markers: true,
        description: "Документы, обязательные для всех сотрудников без исключения",
        subcategories: [{
            subtitle: "Паспорт",
            required: true,
            submarkers: true,
            forWho: "Для всех"
        },
        {
            subtitle: "ИНН",
            required: true,
            submarkers: false,
            forWho: "Для всех"
        }]
    },
    {
        title: "Обязательные для трудоустройства",
        description: " Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж",
        subcategories: [],
    },
    {
        title: "Специальные",
        subcategories: [],
    }
];

const uncategories = [
    {
        title: "Тестовое задание кандидата",
        markers: false,
        description: "Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха",
    },
    {
        title: "Трудовой договор",
        markers: true,
        description: undefined
    },
    {
        title: "Мед. книжка",
        markers: false,
        description: undefined
    }
]