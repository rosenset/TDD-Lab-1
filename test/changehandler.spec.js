describe("tests for change-handler", function() {

    it("checks (changeHandler)", function(){
        let test1 = new ChangeHandler(5);
        expect(test1.amountDue).toBe(5);
        expect(test1.cashTendered).toBe(0);
    });

    it("does something (insertCoin)- inserts a coin and increases each cash tendered", function() {
        //Arrange
        let changeHandler = new changeHandler(0,0);
        //Act and Assert
        expect(changeHandler.insertCoin('penny')).toBe(1);
        expect(changeHandler.insertCoin('nickel')).toBe(5);
        expect(changeHandler.insertCoin('dime')).toBe(10);
        expect(changeHandler.insertCoin('quarter')).toBe(25);
    });

    it("Returns true if enough coins have been inserted to at least meet the amountDue", function() {

        let changeHandler = new changeHandler(20,0);
        expect(changeHandler.isPaymentSufficient()).toBe(false);
        
        changeHandler = new changeHandler(20,20);
        expect(changeHandler.isPaymentSufficient()).toBe(true);

        changeHandler = new changeHandler(20,100);
        expect(changeHandler.isPaymentSufficient()).toBe(true);
    });

    it("return the correct change", function() {
        let changeHandler = new ChangeHandler(32);
        expect(changeHandler.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2 });

        changeHandler = new ChangeHandler(10);
        expect(changeHandler.giveChange()).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0 });

        
        changeHandler = new ChangeHandler(27);
        expect(changeHandler.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2 });

        
        changeHandler = new ChangeHandler(68);
        expect(changeHandler.giveChange()).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3 });
    });
});


//* keep getting 4 failed tests. No idea where the issue is *//