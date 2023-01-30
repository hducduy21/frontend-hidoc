import Images from "~/assets/Images";
import styles from './Doctor.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faHospital } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
let currentDate = new Date(new Date().getTime());
let day = [new Date(new Date().getTime()+ 24 * 60 * 60 * 1000),new Date(new Date().getTime()+ 24 * 60 * 60 * 1000 *2)
    , new Date(new Date().getTime()+ 24 * 60 * 60 * 1000 *3),new Date(new Date().getTime()+ 24 * 60 * 60 * 1000*4)
    ,new Date(new Date().getTime()+ 24 * 60 * 60 * 1000*5), new Date(new Date().getTime()+ 24 * 60 * 60 * 1000*6), 
    new Date(new Date().getTime()+ 24 * 60 * 60 * 1000)*7]
let dayOfWeek = ["Chủ nhật", "Thứ hai" ,"Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"]
const today = currentDate.getDay()


const data = [
    [
        {
            id: 1,
            time: "7:00-9:00",
            number: 20,
            registered: 8
        },
        {
            id: 2,
            time: "9:30-11:00",
            number: 30,
            registered: 16
        },
        {
            id: 3,
            time: "13:00-15:00",
            number: 20,
            registered: 19
        },
        {
            id: 4,
            time: "15:30-17:00",
            number: 15,
            registered: 15
        }
    ],
    [
        {
            id: 5,
            time: "7:00-9:00",
            number: 20,
            registered: 8
        },
        {
            id: 6,
            time: "9:30-11:00",
            number: 30,
            registered: 16
        },
        {
            id: 7,
            time: "13:00-15:00",
            number: 20,
            registered: 19
        },
        {
            id: 8,
            time: "15:30-17:00",
            number: 15,
            registered: 15
        }
    ],
    [
        {
            id: 9,
            time: "7:00-9:00",
            number: 20,
            registered: 8
        },
        {
            id: 10,
            time: "9:30-11:00",
            number: 30,
            registered: 16
        },
        {
            id: 11,
            time: "13:00-15:00",
            number: 20,
            registered: 19
        },
        {
            id: 12,
            time: "15:30-17:00",
            number: 15,
            registered: 15
        }
    ],
    [
        {
            id: 13,
            time: "7:00-9:00",
            number: 20,
            registered: 8
        },
        {
            id: 14,
            time: "9:30-11:00",
            number: 30,
            registered: 16
        },
        {
            id: 15,
            time: "13:00-15:00",
            number: 20,
            registered: 19
        },
        {
            id: 16,
            time: "15:30-17:00",
            number: 15,
            registered: 15
        }
    ],
    [
        {
            id: 17,
            time: "7:00-9:00",
            number: 20,
            registered: 8
        },
        {
            id: 18,
            time: "9:30-11:00",
            number: 30,
            registered: 16
        },
        {
            id: 19,
            time: "13:00-15:00",
            number: 20,
            registered: 19
        },
        {
            id: 20,
            time: "15:30-17:00",
            number: 15,
            registered: 15
        }
    ],
    [
        {
            id: 21,
            time: "7:00-9:00",
            number: 20,
            registered: 8
        },
        {
            id: 22,
            time: "9:30-11:00",
            number: 30,
            registered: 16
        },
        {
            id: 23,
            time: "13:00-15:00",
            number: 20,
            registered: 19
        },
        {
            id: 24,
            time: "15:30-17:00",
            number: 15,
            registered: 15
        }
    ],
]
function colorDensity(a,b){
    if(a===b)
        return "noDensity"
    if((a/b)>=0.8)
        return "redDensity"
    if((a/b)>=0.5)
        return "yellowDensity"
    if((a/b)>=0.3)
        return "greenDensity"
    return "whiteDensity"
}
function Doctor() {
    return ( <div className={cx('doctorContainer')}>
        <div className="left">
            <img src={Images.bstest}/>
            <span className="title">Bác sĩ cao cấp Nguyễn Duy Hưng</span>
            <div className={cx("hospital")}><FontAwesomeIcon icon={faHospital}/><span className={cx("hospital_name")}>Bệnh viện chợ rẫy</span></div>
            <div className={cx("location")}><FontAwesomeIcon icon={faLocationDot}/><span className={cx("location_name")}>19 Nguyễn Hữu Thọ, phường Tân Phong, Quận 7, TP HCM</span></div>
            
            <span className="desc">{"Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương. \nBác sĩ từng công tác tại Bệnh viện Da liễu Trung ương. Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam"}</span>
        </div>
        <div className="right">
            <div>
                <div className={cx("day")}>{dayOfWeek[day[0].getDay()]+" ("+day[0].getDate()+"/"+(day[0].getMonth()+1)+"/"+day[0].getFullYear()+")"}</div>
                <div className={cx("listSign")}>
                    {data[0].map((item,index)=>
                        <div key={index} className={colorDensity(item.registered,item.number)}>{item.time+ " "+item.registered+"/"+item.number}</div>
                    )}    
                </div>
            </div>
            <div>
                <div className={cx("day")}>{dayOfWeek[day[1].getDay()]+" ("+day[1].getDate()+"/"+(day[1].getMonth()+1)+"/"+day[1].getFullYear()+")"}</div>
                <div className={cx("listSign")}>
                    {data[1].map((item,index)=>
                        <div key={index} className={colorDensity(item.registered,item.number)}>{item.time+ " "+item.registered+"/"+item.number}</div>
                    )}    
                </div>
            </div>
            <div>
                <div className={cx("day")}>{dayOfWeek[day[2].getDay()]+" ("+day[2].getDate()+"/"+(day[2].getMonth()+1)+"/"+day[2].getFullYear()+")"}</div>
                <div className={cx("listSign")}>
                    {data[2].map((item,index)=>
                        <div key={index} className={colorDensity(item.registered,item.number)}>{item.time+ " "+item.registered+"/"+item.number}</div>
                    )}    
                </div>
            </div>
            <div>
                <div className={cx("day")}>{dayOfWeek[day[3].getDay()]+" ("+day[3].getDate()+"/"+(day[3].getMonth()+1)+"/"+day[3].getFullYear()+")"}</div>
                <div className={cx("listSign")}>
                    {data[3].map((item,index)=>
                        <div key={index} className={colorDensity(item.registered,item.number)}>{item.time+ " "+item.registered+"/"+item.number}</div>
                    )}    
                </div>
            </div>
            <div>
                <div className={cx("day")}>{dayOfWeek[day[4].getDay()]+" ("+day[4].getDate()+"/"+(day[4].getMonth()+1)+"/"+day[4].getFullYear()+")"}</div>
                <div className={cx("listSign")}>
                    {data[4].map((item,index)=>
                        <div key={index} className={colorDensity(item.registered,item.number)}>{item.time+ " "+item.registered+"/"+item.number}</div>
                    )}    
                </div>
            </div>
            <div>
                <div className={cx("day")}>{dayOfWeek[day[5].getDay()]+" ("+day[5].getDate()+"/"+(day[5].getMonth()+1)+"/"+day[5].getFullYear()+")"}</div>
                <div className={cx("listSign")}>
                    {data[5].map((item,index)=>
                        <div key={index} className={colorDensity(item.registered,item.number)}>{item.time+ " "+item.registered+"/"+item.number}</div>
                    )}    
                </div>
            </div>
        </div>
    </div> );
}

export default Doctor;