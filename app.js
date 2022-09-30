const puppeteer = require("puppeteer");
const fs = require("fs")

async function start() {
            const browser = await puppeteer.launch({ headless: true })

            const page = await browser.newPage()

            // * Here you put the site whose content you want to copy.
            await page.goto('http://www.example.com')

            const copyContent = await page.evaluate(() => {

                        // * Here you put the tag that you want to take from the site.
                        // ? You can use HTML class to copy a specific object if you want LIke: .example instead H1 .
                        const copyH1 = document.querySelectorAll("H1")

                        const copyH2 = document.querySelectorAll("H2")

                        const copyH3 = document.querySelectorAll("H3")

                        const copyH4 = document.querySelectorAll("H4")

                        const copyH5 = document.querySelectorAll("H5")

                        const copyH6 = document.querySelectorAll("H6")

                        const copyP = document.querySelectorAll("p")

                        const copySapn = document.querySelectorAll("span")

                        const copya = document.querySelectorAll("a")

                        let CopyArray = [];


                        // * Here is that callback of that element to save it in array
                        copyH1.forEach((H1) => {
                                    CopyArray.push(H1.innerText)
                        })

                        copyH2.forEach((H2) => {
                                    CopyArray.push(H2.innerText)
                        })

                        copyH3.forEach((H3) => {
                                    CopyArray.push(H3.innerText)
                        })

                        copyH4.forEach((H4) => {
                                    CopyArray.push(H4.innerText)
                        })

                        copyH5.forEach((H5) => {
                                    CopyArray.push(H5.innerText)
                        })

                        copyH6.forEach((H6) => {
                                    CopyArray.push(H6.innerText)
                        })

                        copyP.forEach((p) => {
                                    CopyArray.push(p.innerText)
                        })

                        copySapn.forEach((span) => {
                                    CopyArray.push(span.innerText)
                        })

                        copya.forEach((a) => {
                                    CopyArray.push(a.innerText)
                        })



                        return CopyArray;


            })


            // * Here the file is saved in a compressed .txt file that you will find in the project files after running the project.
            // ? and u can named the file want you want.
            fs.writeFileSync("copyWebSite.txt", copyContent.join(`\n`));

            await browser.close()

            console.log('The WebSite is successfully copied ...')

            console.log('That copy is saved in file named copyWebSite.txt')
}

start()


