import 'cypress-file-upload'


describe("File Uploads", () =>
{
    it.skip("Single file upload", () =>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('sample_1.txt')
        cy.get("#file-submit").click();
        cy.get("#content > div > h3").should('have.text','File Uploaded!')
    })

    it.skip("File upload rename", () =>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:'sample_1.txt',fileName:'Myfile.txt'})
        cy.get("#file-submit").click();
        cy.get("#content > div > h3").should('have.text','File Uploaded!')
    })

    it.skip("File upload drag & drop", () =>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile('sample_1.txt',{subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get("#drag-drop-upload > div > div.dz-details > div > span").contains('sample_1.txt')
    })

    it.skip("Multiple files upload", () =>
    {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['sample_1.txt','TOdays.txt'])
        cy.wait(5000)
        cy.get("#main > div > p:nth-child(6) > strong").should('contain.text','Files You Selected:')
    })

    it.only("File upload - Shadow DOM", () =>
    {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile('sample_1.txt')
        cy.wait(5000)
        cy.get(".smart-item-name",{includeShadowDom:true}).contains('sample_1.txt')
    })
})