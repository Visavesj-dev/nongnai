import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SinglePage from "./SinglePage";
import List from "./List";
import Demo from "./Demo";
import Footer from "./Footer";
import Nav from "./Nav";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-12 col-md-2 p-3 p-md-5 text-center uk-animation-slide-left">
              <Nav />
            </div>
            <div className="col-12 col-md-10 p-3 p-md-5 text-center">
              <Demo />
              <div className="row">
                <Route path="/" component={List} exact />
                <Route path="/article/:name" component={SinglePage} />
              </div>
              <div>
                <h1>สาเหตุหนองใน</h1>
                <p>
                  เกิดจากการติดเชื้อแบคทีเรีย ที่ชื่อ Neisseria gonorrhoeae
                  ซึ่งสามารถตรวจพบได้ในน้ำอสุจิและสารน้ำในช่องคลอด
                  จึงถ่ายทอดผ่านทางการมีเพศสัมพันธ์เป็นหลัก
                  และสามารถถ่ายทอดได้บ้างโดยการสัมผัสโดยตรง เช่น
                  ทารกที่คลอดผ่านทางช่องคลอดของมารดาที่ติดเชื้อ
                  ทำให้เกิดการติดเชื้อที่เยื่อบุตา
                  นอกจากนี้เชื้อหนองในยังสามารถพบที่เซลล์ของปากมดลูก ท่อปัสสาวะ
                  ทวารหนักและช่องคลอดได้อีกด้วย ในสตรี
                  เชื้อสามารถแพร่จากช่องคลอดไปทวารหนักได้เองโดยไม่จำเป็นต้องมีเพศสัมพันธ์ทางทวารหนัก
                  สำหรับการมีเพศสัมพันธ์โดยการใช้มือหรือนิ้วช่วย
                  ยังไม่มีหลักฐานชัดเจนว่าทำให้เกิดการถ่ายทอดเชื้อได้
                  กิจกรรมต่อไปนี้ ไม่ทำให้เกิดการถ่ายทอดเชื้อหนองใน ได้แก่ กอด
                  จูบ ใช้ห้องน้ำหรือผ้าเช็ดตัวร่วมกัน การใช้สระว่ายน้ำร่วมกัน
                  การใช้ห้องน้ำ หรือการใช้แก้วน้ำ จาน ชามร่วมกัน
                </p>
              </div>
              <div>
                <h1>อาการของโรคหนองใน</h1>
                <p>
                  พบว่าผู้ชายร้อยละ10 และผู้หญิงร้อยละ 50 จะไม่แสดงอาการ
                  ในกรณีที่มีอาการจะเริ่มแสดงอาการเมื่อ 1-14 วันหลังได้รับเชื้อ
                  อาการในผู้หญิง ได้แก่ ตกขาวผิดปกติ เช่น ปริมาณมากขึ้น
                  มีสีเหลืองหรือเขียว แสบเวลาปัสสาวะ ปวดท้องน้อย
                  เลือดออกกะปริบกะปรอย ระหว่างรอบเดือน(พบน้อย) เป็นต้น
                  สำหรับอาการในผู้ชาย ได้แก่
                  มูกใสออกจากท่อปัสสาวะโดยไม่ใช่น้ำปัสสาวะหรือน้ำอสุจิ แสบ
                  เวลาปัสสาวะ ปวดที่อัณฑะ
                  มีการอักเสบที่หนังหุ้มปลายองคชาต(พบน้อย) เป็นต้น
                  การติดเชื้อที่บริเวณอื่นๆ
                  จะทำให้เกิดอาการที่ไม่แตกต่างกันระหว่างผู้หญิงและผู้ชาย ได้แก่
                  การติดเชื้อในทวารหนัก
                  อาจทำให้เกิดอาการปวดหน่วงหรืออาจมีสารน้ำคล้ายหนองออกมาการติดเชื้อในลำคอมักไม่มีอาการใด
                  การติดเชื้อที่เยื่อบุตา จะทำให้มีอาการเจ็บปวด
                  ระคายเคืองและมีหนองได้
                </p>
              </div>
              <div>
                <h1>จะทราบได้อย่างไรว่ามีการติดเชื้อหนองในแล้ว</h1>
                <p>
                  หากท่านหรือคู่นอนมีอาการข้างต้นอย่างใดอย่างหนึ่ง
                  หรือมีโรคติดต่อทางเพศสัมพันธ์ชนิดใดชนิดหนึ่ง
                  ท่านควรเข้ามารับการตรวจที่หน่วยฯ เมื่อท่านมาที่หน่วยฯ
                  ท่านจะได้รับการซักประวัติ ตรวจร่างกาย ตรวจภายใน
                  นำตกขาวไปตรวจภายใต้กล้องจุลทรรศน์และส่งเพาะเชื้อ
                  ขั้นตอนในการวินิจฉัยเบื้องต้น สามารถทำได้แล้วเสร็จภายใน 1 วัน
                  ส่วนผลการเพาะเชื้อจะทราบภายใน 1 สัปดาห์
                  เมื่อผลการตรวจสนับสนุนว่าท่านติดเชื้อหนองใน
                  ท่านควรได้รับการตรวจเลือดเพื่อหาโรคติดต่อทางเพศสัมพันธ์ชนิดอื่นร่วมด้วย
                  ได้แก่ โรคติดเชื้อเอชไอวี โรคไวรัสตับอักเสบบี และโรคซิฟิลิส
                  การเก็บสิ่งส่งตรวจควรทำทุกตำแหน่งที่มีเพศสัมพันธ์
                  ได้แก่การตรวจหาเชื้อในคอหากท่านเคยมีเพศสัมพันธ์โดยการใช้ปาก
                  และการตรวจทางทวารหนักหากท่านเคยมีเพศสัมพันธ์ทางทวารหนัก
                  เป็นต้น ในปัจจุบันมีการตรวจโดยการหาสารพันธุกรรมของเชื้อหนองใน
                  แต่เนื่องจากมีราคาแพง จึงเลือกใช้สำหรับผู้ป่วยบางรายเท่านั้น
                </p>
              </div>
              <div>
                <h1>การรักษาโรคหนองใน</h1>
                <p>
                  การใช้ยาปฏิชีวนะ ซึ่งมีประสิทธิภาพมากกว่าร้อยละ 95
                  ผู้ป่วยควรได้รับการรักษาให้เร็วที่สุด
                  เพื่อลดภาวะแทรกซ้อนที่ตามมาในกรณีที่ท่านมีความเสี่ยงสูงในการติดเชื้อ
                  หากไม่สามารถที่จะรับการตรวจเพื่อวินิจฉัย
                  ควรรับยาเพื่อรักษาไปเลย ในกรณีที่เกิดภาวะแทรกซ้อนแล้ว เช่น
                  อุ้งเชิงกรานอักเสบ ปวดท้องน้อยเรื้อรัง ภาวะมีบุตรยาก เป็นต้น
                  ท่านอาจจะต้องนอนรับการรักษาในโรงพยาบาลหรือรับการผ่าตัดแก้ไข
                  ยาปฏิชีวนะที่รักษาโรคหนองใน
                  มีผลต่อประสิทธิภาพของยาเม็ดคุมกำเนิด ในระหว่างการรักษา
                  แนะนำให้งดการมีเพศสัมพันธ์
                  และในเดือนนั้นท่านควรใช้วิธีคุมกำเนิดอย่างอื่นร่วมด้วย เช่น
                  ถุงยางอนามัย เมื่อท่านเป็นหนองใน
                  จะแนะนำให้รักษาโรคติดเชื้อคลาไมเดียควบคู่กัน
                  เพราะพบร่วมกันได้ถึงร้อยละ 30 **
                  หากได้รับการรักษาแล้วมีอาการที่สงสัยว่าแพ้ยา เช่น
                  มีผื่นคันตามตัว คลื่นไส้อาเจียน หรือมีอาการมากขึ้น
                  ควรไปพบแพทย์ก่อนนัด
                </p>
              </div>
              <div>
                <h1>อาการต่างๆ จะหายไปเมื่อไร</h1>
                <p>
                  อาการต่างๆ จะหายไปค่อนข้างเร็วใน 2-3 วันหลังเริ่มการรักษา
                  ทั้งอาการตกขาวผิดปกติและแสบเวลาปัสสาวะ
                  ส่วนเลือดออกกะปริบกะปรอยระหว่างรอบเดือนจะดีขึ้นในรอบเดือนหน้า
                  สำหรับอาการปวดท้องน้อยและอาการปวดอัณฑะในผู้ชายจะใช้เวลานานกว่า
                  โดยอาการมักหายภายใน 2 สัปดาห์ หากอาการต่างๆ ไม่ดีขึ้นตามนี้
                  ท่านควรมารับการตรวจประเมินซ้ำจากแพทย์ที่หน่วยฯ
                  เนื่องจากพบภาวะดื้อยาได้บ่อยหรือโรคมีการลุกลามมากขึ้น
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
