import { Card,Button} from "react-bootstrap";
import Images from "~/assets/Images";
import styles from "./CardComponent.scss";
import classNames from 'classnames';
const cx = classNames.bind(styles);

function CardComponent({type,name="",img,desc=""}) {
    if (type===1)
    return (
        <div className={cx("wrapper_card_1")}>
            <Card className={cx("wrapper_card")}>
                <Card.Img variant="top" src={img||Images.logo} className={cx("img")}/>
                <Card.Body className={cx("body")}>
                    <Card.Title className={cx("title")}>{name}</Card.Title>
                    <Card.Text className={cx("desc")}>{desc}</Card.Text>
                    <Button variant="primary" className={cx("btn_dat")}>Đặt khám ngay</Button>
                </Card.Body>
            </Card>
        </div>
        
    );
    else
    return(
        <div className={cx("wrapper_card_2")} >
            <Card className={cx("wrapper_card")} border="light">
                <Card.Img variant="top" src={img||Images.logo} className={cx("img","rounded-0")} />
                <Card.Title className={cx("title")}>{name}</Card.Title>
            </Card>
        </div>
    );
}

export default CardComponent;