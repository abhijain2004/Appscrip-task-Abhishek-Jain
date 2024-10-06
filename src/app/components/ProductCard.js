import styles from "./ProductCard.module.css";

function ProductCard({image,title,id}) {
  return <div id={id} className={styles['card']}>
  <img src={image} className={styles['card-image']} alt="card-image" />
  <span className={styles['card-title']}>{title}</span>
  <div className={styles['card-footer']}>
  <div><u>Sign in</u> or Create an account to see pricing
  </div>
  <img src="assets/heart.png" height={30} width={30} alt="heart" style={{cursor:"pointer"}}/></div>
  </div>
}

export default ProductCard;