import Image from 'next/image';
import Link from "next/link";
import React from "react";
import styles from '@/styles/Contact.module.css';

const About = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div>
            <a>
              <Image
                src="/logosmartshark.png"
                alt="Smart Shark"
                width={200}
                height={200}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </a>
          </div>
          <div className='header-menu'>
            <ul className={styles.menunav}>
              <li className={styles.li}><Link href="/" className={styles.navLink}>TRANG CHỦ</Link></li>
              <li className={styles.li}><Link href="" className={styles.navLink}>GIỚI THIỆU</Link></li>
              <li className={styles.contact}><Link href="/lienhe" className={styles.navLink}>LIÊN HỆ</Link></li>
            </ul>
          </div>
        </div>
      </header>
      <div className="content_wapper home_wapper">
        <div className={styles.container_contact}>
          <div className="padding_home head_title">
            <h3 className={styles.h3}>Liên hệ</h3>
          </div>
          <div className="block_new_short"><p>
            ========================================================</p>
            <p>
              <b>Ph&ograve;ng Đ&agrave;o Tạo</b></p>
            <p>
              Địa chỉ: 101 Nh&agrave; A1, 268 L&yacute; Thường Kiệt, P. 14, Q.10, Tp. Hồ Ch&iacute; Minh</p>
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 107 Nh&agrave; H1, Đại học B&aacute;ch Khoa - Cơ sở Dĩ An (khu ĐH Quốc Gia, Thủ Đức, TP.HCM)</p>
            <p>
              Email: <a className={styles.a} href="mailto: pdt@hcmut.edu.vn">pdt@hcmut.edu.vn</a></p>
            <p>
              Điện thoại: (02) 838 654 087&nbsp;&nbsp;&nbsp;&nbsp; ;Số Fax: (02) 838 637 002</p>

            <p>
              <a className={styles.a} href="http://aao.hcmut.edu.vn/index.php?route=catalog/chitiettb&thongbao_id=359" target='blank'>Thông tin lãnh đạo phòng đào tạo</a></p>
            <p>
              <p>
                =========================================================</p>
              <p>
                <b>Phòng Công tác chính trị - Sinh viên</b></p>
              <p>
                Địa chỉ: 101A4 Cơ sở Lý thường kiệt hoặc Khu hành chánh Cơ sở Dĩ an</p>
              <p>
                Email: <a className={styles.a} href="mailto: ctctsv@hcmut.edu.vn">ctctsv@hcmut.edu.vn</a></p>
              <p>
                Điện thoại: (02) 83.8 647 256</p>
              <p>
                =========================================================</p>
              <p>
                <b>Văn phòng đào tạo quốc tế </b></p>
              <p>
                Địa chỉ: Kiosk OISP, Khu B2, Trường Đại học Bách khoa, 268 Lý Thường Kiệt, P.14, Q.10, TP.HCM</p>
              <p>
                Email: <a className={styles.a} href="mailto: oisp@hcmut.edu.vn">oisp@hcmut.edu.vn</a></p>
              <p>
                Điện thoại: (028) 7300.4183 – 03.9798.9798</p>
              &nbsp;</p>
            <div className={styles.map}>
              <div className={styles.mapitem}>
                <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.512319230307!2d106.655514728718!3d10.77201816003445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec19ae2c031%3A0x7680991226ed9a87!2zxJDhuqFpIGjhu41jIELDoWNoIEtob2E!5e0!3m2!1sen!2s!4v1461209317908" ></iframe></div>

              <div className={styles.mapitem}>
                <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11081.993664879992!2d106.7973649652271!3d10.881791051399881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a5568c997f%3A0xdeac05f17a166e0c!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBCw6FjaCBLaG9hIFRQSENNIEPGoSBT4bufIDI!5e0!3m2!1sen!2s!4v1461209784306" ></iframe></div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <a>
          Bản quyền thuộc Trường Đại học Bách Khoa - ĐHQG-HCM
        </a>
      </footer>
    </div>

  );
};

export default About;