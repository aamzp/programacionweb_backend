

            $(document).ready(function () {

                fetch('https://fakestoreapi.com/products')
                        .then((data)=>{
                            return data.json();
                        })
                        .then((objectData)=>{
                            console.log(objectData[0].title);
                            let tableData="";
                            objectData.map((values)=>{
                                tableData+=` 
                                <tr>
                                <td>${values.id}</td>
                                <td>${values.title}</td>
                                <td>${values.description}</td>
                                <td>${values.price}</td>
                                <td><img src="${values.image}"/></td>
                                </tr>
                                `
                            });
                            document.getElementById("tabla-datos")
                                .innerHTML=tableData;
                        })
                        .catch((err)=>{console.log(err);   
            
                        })
            
            
            
            })