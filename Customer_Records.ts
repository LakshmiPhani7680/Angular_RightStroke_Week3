let  Customer_Records:[String,number,String,String][];
    Customer_Records=[["Phani",7991332687,"India","creditCard"],["Srinivas",9952436729,"India","CheckBook"],
    ["Pavan",9292372299,"India","Account-Transferring"]];
    Customer_Records.push(["Warner",123,"Australia","Visa-Gold-Card"]);
    Customer_Records.pop();

    Customer_Records.forEach(element => {
      console.log("Customer Name is "+element[0]+" and from "+element[2]+" Whose Phone number is "+element[1]+" applied for "+element[3]);
    });
    
    
    
    
    
    
    
    
    
    
    
    
    /**
    #OUTPUT#
    Customer Name is Phani and from India Whose Phone number is 7991332687 applied for creditCard
    Customer Name is Srinivas and from India Whose Phone number is 9952436729 applied for CheckBook
    Customer Name is Pavan and from India Whose Phone number is 9292372299 applied for Account-Transferring
    **/
