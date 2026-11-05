import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ListaProdutos from "./pages/listasprodutos/ListaProdutos";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import DetProduto from "./pages/detProduto/DetProduto";
import AdmProdutos from "./pages/admProdutos/AdmProdutos";

export default function App(){
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/detprodutos" element={<DetProduto/>}/>
            <Route path="/" element={<Home/>} />
            <Route path="/produtos" element={<ListaProdutos/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/adm" element={<AdmProdutos/>} />
            <Route path="*" element={<img className="container-notfound" src="https://www.scopycode.com/includes/images/blog/404_error_page_not_found.gif" alt="imagem de não encontrado" /> } />
        </Routes>
       <Footer/>
        </>
    )
}
