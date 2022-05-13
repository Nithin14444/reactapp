import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    
    <div class="container">
        <div class="row"/>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12"/>
            <div class="row g-2"/>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12"><label for="" class="form_label">Message</label>
                <input type="text" class="form-control" placeholder="Enter Message"/></div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6"><label for="" class="form_label">Tag</label>
                <input type="text" class="form-control" placeholder="Enter Tag"/></div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6"><label for="" class="form_label">Test</label>
                <input type="text" class="form-control" placeholder=""/></div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6">

                    <a href="" class="btn btn-success">Submit</a>
                    </div>
                    </div>
  );
}
            
  


export default App;
