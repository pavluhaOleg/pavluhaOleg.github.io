export const addElem = (goodsItem, elem, setElem) => {
    let quantity = 1;

    const indexInOrder = elem.findIndex(
        (item) => item.id === goodsItem.id
    );

    if (indexInOrder > -1) {
        quantity = elem[indexInOrder].quantity + 1;

        setElem(elem.map((item) => {
            if (item.id !== goodsItem.id) return item;

            return {
                id: item.id,
                name: item.name,
                price: item.price,
                poster: item.poster,
                quantity,
            };
        }),
        );
    } else {
        setElem([
            ...elem,
            {
                id: goodsItem.id,
                name: goodsItem.name,
                price: goodsItem.price,
                poster: goodsItem.poster,
                quantity,
            },
        ],
        );
    }
};

export const filterElem = (goodsItem, elem, setElem) => {
    setElem(elem.filter((item) => item.id !== goodsItem));
};

export const simplificationAPI = (setElem, elem, setPages, funcPageCount, limit) => {
    setElem(elem.data)
    const totalCount = elem.headers['x-total-count'];
    setPages(funcPageCount(totalCount, limit));
}

