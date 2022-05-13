import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    
     
    <div class="container">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row g-2">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6"><label for="" class="form_label">name</label>
                    <input type="text" class="form-control" placeholder="enter name"/></div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6"><label for="">admno</label>
                    <input type="text" class="form-control"placeholder="enter admno"/></div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6"><label for="">roll no</label>
                    <input type="text" class="form-control"placeholder="enter roll"/></div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6"><label for="">mobile</label>
                        <input type="text" class="form-control"placeholder="enter number"/></div>
                        <div class="col col-12  col-lg-12"><label for="">college</label>
                            <input type="text" class="form-control"placeholder="enter name"/></div>
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6"><label for="" class="form_label">user name</label>
                                <input type="text" class="form-control" placeholder="enter name"/></div>
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6"><label for="">password</label>
                                <input type="text" class="form-control"placeholder="enter password"/></div>
                                <div class="col col-12 col-sm-6 col-md-6 col-lg-6"><input type="button" value="register" class="btn btn-success"/>
                                </div>
                                <div class="col col-12 col-sm-6 col-md-6 col-lg-6">

                                <a href="index.html" class="btn btn-success">back to login</a>
                                </div>
                           
                  

              
                
            
            </div>
        </div>
    </div>
                    </div>
  );
}
            
  


export default App;
