const fs = require('fs-extra')
const dir1 = './folder1'
const dir2 = './folder2'
const file1 = './folder1/file.txt'
const file2 = './folder2/file.txt'

fs.ensureDir(dir1, err => {
    if (err) return console.error(err)
    console.log('folder1 created')
    fs.ensureFile(file1, err => {
        if (err) return console.error(err)
        console.log('file created')
        fs.ensureDir(dir2, err => {
            if (err) return console.error(err)
            console.log('folder2 created')
            fs.move(file1, file2, err => {
                if (err) return console.error(err)
                console.log('file moved')
                fs.remove(file2, err => {
                    if (err) return console.error(err)
                    console.log('file removed')
                    fs.remove(dir1, err => {
                        if (err) return console.error(err)
                        console.log('folder1 removed')
                        fs.remove(dir2, err => {
                            if (err) return console.error(err)
                            console.log('folder2 removed')
                        })

                    })
                })
            })
        })

    })
})