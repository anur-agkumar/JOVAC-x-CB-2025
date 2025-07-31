class ECart {
    constructor() {
        this.items = [
            { id: 1, name: 'Laptop', cost: 1000, qty: 10 },
            { id: 2, name: 'Phone', cost: 400, qty: 12 },
            { id: 3, name: 'Earbuds', cost: 200, qty: 5 }
        ];
        this.cart = [];
        this.sales = [];
        this.cash = 2000;
    }

    addItem(id, qty, cb) {
        setTimeout(() => {
            const item = this.items.find(i => i.id === id);
            if (!item) return cb(new Error('Item not found'));
            if (item.qty < qty) return cb(new Error('Low stock'));
            
            this.cart.push({ id, qty, cost: item.cost });
            item.qty -= qty;
            cb(null, this.cart);
        }, 500);
    }

    makeOrder(cb) {
        setTimeout(() => {
            if (!this.cart.length) return cb(new Error('cart empty'));
            
            const saleId = this.sales.length + 1;
            const sum = this.cart.reduce((t, i) => t + (i.cost * i.qty), 0);
            const sale = { id: saleId, items: [...this.cart], sum};
            this.sales.push(sale);
            cb(null, sale);
        }, 500);
    }

    payOrder(saleId, cb) {
        setTimeout(() => {
            const sale = this.sales.find(s => s.id === saleId);
            if (!sale) return cb(new Error('Sale not found'));
            if (this.cash < sale.sum) return cb(new Error('Not enough cash'));
            
            this.cash -= sale.sum;
            sale.state = 'paid';
             
            cb(null, sale);
        }, 500);
    }
}

const shop = new ECart();
shop.addItem(1, 2, (err, basket) => { // (id, qnty)
    if (err) return console.log('Error:', err.message);
    console.log('Basket:', basket);
    
    shop.makeOrder((err, sale) => {
        if (err) return console.log('Error:', err.message);
        console.log('Sale:', sale);
        
        shop.payOrder(sale.id, (err, paidSale) => {
            if (err) return console.log('Error:', err.message);
            console.log('Paid:', paidSale);
             console.log('Cash left:', shop.cash);
        });
    });
    
});