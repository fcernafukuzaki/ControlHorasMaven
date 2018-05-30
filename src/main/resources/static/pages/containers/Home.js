import React, {Component} from 'react';
import HomeLayout from'../components/HomeLayout';
//import Categories from'../../categories/components/categories';
//import Related from'../components/related';
//import ModalContainer from'../../widgets/containers/modal';

import Footer from '../components/Footer';
import FooterContainer from '../components/FooterContainer';

class Home extends Component {
    render(){
        return(
           
           <HomeLayout>
             <small className="text-muted">With faded secondary text</small>
             <FooterContainer>
               <Footer />
             </FooterContainer>
           </HomeLayout>
        )
    }
}

export default Home;