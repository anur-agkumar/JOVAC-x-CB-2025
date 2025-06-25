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

    async addItem(id, qty) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                const item = this.items.find(function(i) {
                    return i.id === id;
                }.bind(this));

                if (!item) return reject(new Error('Item not found'));
                if (item.qty < qty) return reject(new Error('Low stock'));

                this.cart.push({ id: id, qty: qty, cost: item.cost });
                item.qty -= qty;
                resolve(this.cart);
            }.bind(this), 500);
        }.bind(this));
    }

    async makeOrder() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                if (!this.cart.length) return reject(new Error('Cart empty'));

                const saleId = this.sales.length + 1;
                const sum = this.cart.reduce(function(total, item) {
                    return total + (item.cost * item.qty);
                }, 0);

                const sale = { id: saleId, items: [...this.cart], sum: sum };
                this.sales.push(sale);
                resolve(sale);
            }.bind(this), 500);
        }.bind(this));
    }

    async payOrder(saleId) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
            const sale = this.sales.find(function(s) {
                return s.id === saleId;
                });

       if (!sale) return reject(new Error('Sale not found'));
     if (this.cash < sale.sum) return reject(new Error('Not enough cash'));

            this.cash -= sale.sum;
                sale.state = 'paid';
                resolve(sale);
            }.bind(this), 500);
        }.bind(this));
    }
}
const shop = new ECart();

async function runShop() {
    try {
        const basket = await shop.addItem(1, 2); 
        console.log("Basket:", basket);
        const sale = await shop.makeOrder();
        console.log("Sale:", sale);
        const paid = await shop.payOrder(sale.id);
        console.log("Paid:", paid);
        console.log("Cash left:", shop.cash);
    } catch (err) {
        console.log("Error:", err.message);
    }
}

runShop();
