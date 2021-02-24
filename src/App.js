import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Contentmess";
import Test from "./Test";
import "../node_modules/font-awesome/css/font-awesome.css";
import axios from "axios";
import { getDefaultNormalizer } from "@testing-library/react";

const appStyle = {
    fontSize: "14px",
};

function App() {
    const [todoData, setTodoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingItem, setIsLoadingItem] = useState(null);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [postItem, setPostItem] = useState({
        name: "",
        email: "",
        status: false
    });
    const [products, setProducts] = useState([]);
    const [menuActive, setMenuActive] = useState(null);
    const apiUrl = "https://60183950971d850017a3fbf2.mockapi.io/categories";
    // Get todo
    const getTodo = (type) => {
        // const fetchData = async () => {
        //     const apiUrl = "https://5facef0d2ec98b0016047962.mockapi.io/todos";
        //     const result = await axios.get(apiUrl);

        //     setTodoData(result.data);
        // };
        // fetchData();
        
        axios
            .get(apiUrl)
            .then((res) => {
                setTodoData(res.data);
                // if(type === 'list' || type === 'update')
                    setIsLoading(false);
                setIsLoadingItem(null);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    // Change status todo
    // input: id, index
    const changeStatusTodo = (id, index) => {
        // setIsLoading(true);
    
        let currentItem = todoData.find((item) => item.id === id);
        console.log(currentItem);
        let indexData = todoData.indexOf(currentItem);
        console.log(indexData);
        
    
        setIsLoadingItem(id);

        const currentStatus = todoData.find((e) => e.id === id).status;
        let newTodoData = [...todoData];
        newTodoData[indexData].status = !currentStatus;
        // getTodo("update");
        // console.log("status ====",currentStatus);
        const dataUpdate = { 
            status: !currentStatus,
        };
        axios
            .put(apiUrl + id, dataUpdate)
            .then((res) => {
                getTodo();
                // console.log("abc: ",res);
                // let newTodoData = [...todoData];
                // newTodoData[index].status = !currentStatus;
                // // console.log("new data =>>>> ",newTodoData);
                // setTodoData(newTodoData);
                setIsLoadingItem(null);
            })
            .catch((e) => {
                setIsLoadingItem(null);
                console.log(e.error);
            });
    };
    // Delete todo
    const deleteTodo = (id) => {
        axios
            .delete(apiUrl + id)
            .then((res) => {
                console.log("result of delete: ", res);
                getTodo("delete")
                let newTodoData = todoData.filter((item) => item.id !== id);
                setTodoData(newTodoData);
            })
            .catch((e) => {
                console.log(e.error);
            });
        // Goij api xoa
        // doi api xoa thanh cong thi update lai state
    };
    // Create todo

    useEffect(() => {
        // const apiUrl = "https://5facef0d2ec98b0016047962.mockapi.io/todos";
        getTodo("list")
        // axios
        //     .get(apiUrl)
        //     .then((res) => {
        //         setTodoData(res.data);
        //         setIsLoading(false);
        //         setIsLoadingItem(null);
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     });
    }, []);
    if (isLoading) return <section>Page is loading...</section>;
   
    // buoc 2: update du lieu, get du lieu
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        // let newPostItem = {...postItem};
        // newPostItem.email = e.target.value; /// thay value cu bang value moi
        // setPostItem(newPostItem);
    }
    const handleName = (e) => {
        let newName = e.target.value;
        setName(newName);
        setName(e.target.value)

        let newPostItem = {...postItem};
        // console.log("Value cu",newPostItem);
        // newPostItem.name = e.target.value; /// thay value cu bang value moi
        // setPostItem(newPostItem);
        // console.log("Moi : =>>>",newPostItem);
        
    }
    const viewProducts = (id) => {
        const productsAPI = `https://60183950971d850017a3fbf2.mockapi.io/categories/${id}/products`;
        setMenuActive(id);
        console.log(id);
        axios
            .get(productsAPI)
            .then((res) => {
                setProducts(res.data);
                // if(type === 'list' || type === 'update')
                    setIsLoading(false);
                setIsLoadingItem(null);
            })
            .catch((e) => {
                console.log(e);
            });

    }
    // buoc 3: luu du lieu
    const saveTodo = () => {
        // console.log(postItem);
        
       setIsLoading(true)
        let saveData = {
            "name": name,
            "status": false,
            "email": email,
            "password": password
        }
         console.log("Save todo", saveData);
         axios.post(apiUrl, saveData)
         .then((res) => {
             console.log(res)
             setPostItem({
                name: "",
                email: "",
                status: false
             })
             getTodo()
            })
         .catch((e) => {console.log(e); setIsLoading(false)});
    }
    return (
        <section className="App" style={appStyle}>
            <div className={"container"}>
                {/*<ListData data = {appState.data} isLoading = {appState.loading}/>*/}
                <ul className={"product-menu"}>
                    {todoData.map((item, index) => (
                        <li key={item.id} className={menuActive === item.id ? "active" : ""}>
                            <a href="#" onClick={() => viewProducts(item.id)}>
                                {item.id} - {item.name}
                            </a>
                            {/* <button
                                key={`view-item.${item.id}`}
                                onClick={() => viewProducts(item.id)}
                            >
                                View Products
                            </button>
                            <button
                                key={`delete-item.${item.id}`}
                                onClick={() => deleteTodo(item.id)}
                            >
                                Delete
                            </button>
                            <button
                                key={`update-item.${item.id}`}
                                onClick={() => changeStatusTodo(item.id)}
                            >
                                Update Status{" "}
                                {isLoadingItem === item.id ? <i className="fa fa-spinner"></i> : ""}
                            </button> */}
                        </li>
                    ))}
                </ul>
                <div className="clearfix"></div>
                {/* <form>
                    <div>Name: 
                        <input type="text" name="todoName" value={name} onChange={(e) => handleName(e)} />
                        <input type="text" name="email" value={email} onChange={(e) => handleEmail(e)} />
                        <input type="text" name="password" value={password} onChange={(e) => handlePassword(e)} />
                    </div>
                    <div><button type="button" onClick={() => saveTodo()}>Save</button></div>
                </form> */}
                {products.length !== 0 ?
                <table border={1}>
                    <thead>
                        <th>Name</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                    {products.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table> : ""
                }
            </div>
        </section>
    );
}

export default App;
