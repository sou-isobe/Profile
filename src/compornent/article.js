import "../css/Article.css";

function article({message,className}){
  const styles = { whiteSpace: 'pre-line' };
  return (
    <p className={`${className} article_message`} style={styles}>
      {message}
    </p>
  )
}

export default article;