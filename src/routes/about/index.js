import { h } from 'preact';
import './style.css';


const About = () => (
  <div class="about">
    <h1>About</h1>
    <div class="container my-container">
      <table class="table table-responsive">
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Apple</td>
            <td>34</td>
            <td>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Explicabo beatae adipisci, vitae error mollitia nesciunt aspernatur eaque amet dicta hic. Perferendis aperiam ea, aut, magni ex harum dicta laboriosam. Ratione!</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default About;
