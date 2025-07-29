describe("Handle Tables", () =>
{
    beforeEach("Login", () => 
    {
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get(".btn[type='submit']").click()
        cy.get(".btn-close[type='button']").click()
        cy.get("#menu-customer > a").click()
        cy.get("#collapse-5 > li:nth-child(1) > a").click()
    })

    it("Check Number Of Rows and Columns", () =>
    {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
    })

    it("Check Cell Data from Specific Row and Column", () =>
    {
        cy.get("#form-customer > div.table-responsive > table > tbody > tr:nth-child(3) > td:nth-child(3)").contains('gorankreziccc90@gmail.com')
        
    })

    it("How to read all the rows and columns data in the first page", () =>
    {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row,index,$rows) =>
        {
            cy.wrap($row).within(() =>
            {
                cy.get("td").each(($col,index,$cols) =>
                {
                    cy.log($col.text());                    
                })
            })
        })
    })

    it("Pagination", () =>
    {
        let totalPages;
        cy.get("#form-customer > div.row > div.col-sm-6.text-end").then((e) =>
        {
            let mytext = e.text();
            totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
            cy.log("Total pages"+totalPages)
        })   
    })

    it.only("Pagination", () =>
    {
        let totalPages=5;
        for(let p=1;p<=totalPages;p++)
        {
            if(totalPages>1)
            {
                cy.log("Ative page is ===",+p);
                cy.get("#form-customer > div.row > div.col-sm-6.text-start > ul > li.page-item.active > span").click()
                cy.wait(3000);
                cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row,index,$rows) =>
                {
                    cy.wrap($row).within(() =>
                    {
                        cy.get("td:nth-child(3)").then((e) =>
                        {
                            cy.log(e.text());
                        })
                    })
                })
                
            }
        }
           
    })


});