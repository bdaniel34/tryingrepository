function Click(props) {
  function confirm(){
    props.onConfirm();
  }
  function denied (){
    props.onDenied();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={confirm}>Go ahead</button>
      <button className="btn" onClick={denied}>Get me out of here</button>
    </div>
  );
}
export default Click;
