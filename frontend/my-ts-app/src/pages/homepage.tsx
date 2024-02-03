import Button from "../_components/button/button";
import "../_components/button/button.css";
import "../pages/homepage.css";
import peoplewebpImage from "../assets/people.webp";

type HomePageProps = {
    onClick: () => void
}

export default function HomePage({ onClick }: HomePageProps ) {
    return (
        <div>
            <svg className="coffeelogo"
            width="114" 
            height="110" 
            viewBox="0 0 114 110" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_25_60)">
                <g filter="url(#filter0_d_25_60)">
                <path d="M56.9998 101.373C83.6367 101.373 105.231 80.1278 105.231 53.9216C105.231 27.7151 83.6367 6.47058 56.9998 6.47058C30.3627 6.47058 8.76904 27.7151 8.76904 53.9216C8.76904 62.5643 11.1177 70.6675 15.2215 77.647L11.1806 99L32.8844 95.0246C39.9785 99.0617 48.2151 101.373 56.9998 101.373Z" fill="#44352F"/>
                <path d="M56.9998 101.373C83.6367 101.373 105.231 80.1278 105.231 53.9216C105.231 27.7151 83.6367 6.47058 56.9998 6.47058C30.3627 6.47058 8.76904 27.7151 8.76904 53.9216C8.76904 62.5643 11.1177 70.6675 15.2215 77.647L11.1806 99L32.8844 95.0246C39.9785 99.0617 48.2151 101.373 56.9998 101.373Z" stroke="#FFF5E5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <g clip-path="url(#clip1_25_60)" filter="url(#filter1_d_25_60)">
                <path d="M73.0771 45.5931H75.2695C77.5952 45.5931 79.8257 46.5021 81.4702 48.1201C83.1148 49.738 84.0387 51.9324 84.0387 54.2206C84.0387 56.5087 83.1148 58.7032 81.4702 60.3211C79.8257 61.9391 77.5952 62.848 75.2695 62.848H73.0771" fill="#44352F"/>
                <path d="M73.0771 45.5931H75.2695C77.5952 45.5931 79.8257 46.5021 81.4702 48.1201C83.1148 49.738 84.0387 51.9324 84.0387 54.2206C84.0387 56.5087 83.1148 58.7032 81.4702 60.3211C79.8257 61.9391 77.5952 62.848 75.2695 62.848H73.0771" stroke="#FFF5E5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M38 45.5931H73.0769V65.0049C73.0769 67.293 72.153 69.4875 70.5085 71.1054C68.8639 72.7234 66.6334 73.6324 64.3077 73.6324H46.7692C44.4435 73.6324 42.213 72.7234 40.5684 71.1054C38.9239 69.4875 38 67.293 38 65.0049V45.5931Z" fill="#44352F" stroke="#FFF5E5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M46.7695 30.495V36.9656" stroke="#FFF5E5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M55.5386 30.495V36.9656" stroke="#FFF5E5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M64.3081 30.495V36.9656" stroke="#FFF5E5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_d_25_60" x="1.76904" y="3.47058" width="110.461" height="108.902" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_60"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_60" result="shape"/>
                </filter>
                <filter id="filter1_d_25_60" x="31.0771" y="28.0392" width="60.6152" height="59.7646" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_60"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_60" result="shape"/>
                </filter>
                <clipPath id="clip0_25_60">
                <rect width="114" height="110" fill="white"/>
                </clipPath>
                <clipPath id="clip1_25_60">
                <rect width="52.6154" height="51.7647" fill="white" transform="translate(35.0771 28.0392)"/>
                </clipPath>
                </defs>
            </svg>
            <div className="hometitle">mocha mentors</div>
            <div className="homedescription">
                brewing success, 
                <br/>
                one sip at a time
            </div>
            <Button className='login-button' onClick={onClick} />
            <svg className="circlelogo"
            width="500" 
            height="500" 
            viewBox="0 0 591 543" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M150 0.5H441C523.567 0.5 590.5 67.4334 590.5 150V393C590.5 475.567 523.567 542.5 441 542.5H150C67.4334 542.5 0.5 475.567 0.5 393V150C0.5 67.4334 67.4334 0.5 150 0.5Z" 
            fill="#FFF5E5" 
            stroke="black"/>
            </svg>
            <img className="peoplelogo" src={peoplewebpImage} alt="WebP Image" width="450" height="450" />
             
   
        </div>

    );
}