let stockmarket = {
    stocks : [{
        ticker: 'IBM',
        price: 200
    }, {
        ticker: 'Reliance',
        price: 450    
    }, {
        ticker: 'Wipro',
        price: 80
    }],
    findMax: function(){
        let max = this.stocks[0];

        for(let index=0; index<this.stocks.length; index++){
            if(this.stocks[index].price > max.price)
                max = this.stocks[index];
        }
        console.log(`High priced stock: ${max.ticker}`);
    }
}
stockmarket.findMax();