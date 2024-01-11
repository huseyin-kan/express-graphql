const Orders = [
    {
        date: '2020-05-05',
        subtotal: 20.64,
        items:[
            {
                product:{
                    id: 'bluejean',
                    description: 'Blue Jean',
                    price: 10.32
                },
                quantity: 2
            }
        ]
    }
]
//simiulating
function getOrders(){
    return Orders
}

module.exports = {
    getOrders
}