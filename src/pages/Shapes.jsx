import "../App.css";

const Shapes = () => {
  return (
    <div className='shapes-container'>
      <div className='animation-shape shape-ring animation--rotating-diagonal'>
        <div></div>
      </div>
      <div className='animation-shape shape-circle animation--clockwise'>
        <div></div>
      </div>
      <div className='animation-shape shape-triangle animation--anti-clockwise'>
        <div className='animation--rotating'></div>
      </div>
      <div className='animation-shape shape-diamond animation--anti-clockwise'>
        <div className='animation--rotating'></div>
      </div>
      <div className='static-shape shape-ring-1'></div>
      <div className='static-shape shape-ring-2'></div>
      <div className='static-shape shape-circle-1'></div>
      <div className='static-shape pattern-dots-1'></div>
      <div className='static-shape pattern-dots-2'></div>
      <div className='static-shape ghost-shape ghost-shape-1'></div>
    </div>
  );
};

export default Shapes;
