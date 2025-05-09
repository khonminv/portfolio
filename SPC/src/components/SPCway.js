import { useEffect } from "react";
import gsap from "gsap";

function SPCway(){
	let isMobile;
	
	useEffect(()=>{
	let wayTopList = document.querySelectorAll(".way_top > ul > li a");
	let wayBotList = document.querySelectorAll(".way_bot > ul li");

	let moWayList = document.querySelectorAll(".way_mobile li > a");
	let moWayTab = document.querySelectorAll(".way_mobile_tab");


	//spc way
	wayTopList.forEach(function(item,i){
		item.addEventListener("click", function(e){
			e.preventDefault()
			if(item.classList.contains("active") == false){
				wayTopList.forEach(function(item2,j){
					wayTopList[j].classList.remove("active");
					wayBotList[j].classList.remove("active");
					
				});
				wayTopList[i].classList.add("active");
				wayBotList[i].classList.add("active");
				
			}
		})
	})
	//spc way mobile
	moWayList.forEach(function(item,i){
		item.addEventListener("click", function(e){
			if(isMobile === true){
				e.preventDefault()
				if(item.classList.contains("active") === false){
					moWayList.forEach(function(item2,j){
						gsap.to(moWayTab[j],{height:0,duration:0.5})
						moWayList[j].classList.remove("active");
						moWayTab[j].classList.remove("active");
					});
					gsap.fromTo(moWayTab[i],{height:0},{height:"500px",duration:0.5})
					moWayList[i].classList.add("active");
					moWayTab[i].classList.add("active");
				}
				else{
					gsap.fromTo(moWayTab[i],{height:"500px"},{height:0,duration:0.5})
					moWayList[i].classList.remove("active");
					moWayTab[i].classList.remove("active");
				}
			}
		})
	})

	});

	return(
		<div className="spc_way">
			<div className="inr">
				<div className="way_top">
					<h3>SPC WAY</h3>
					<ul>
						<li>
							<a href="" className="active">
								<span>Management Philosophy</span>
								<p>경영철학</p>
							</a>
						</li>
						<li>
							<a href="">
								<span>Vision</span>
								<p>비전</p>
							</a>
						</li>
						<li>
							<a href="">
								<span>Core Value</span>
								<p>핵심가치</p>
							</a>
						</li>
					</ul>
				</div>
				<div className="way_bot">
					<ul>
						<li className="active">
							<div className="way_text">
								<p>
									SPC그룹은 창의적 도전정신을 바탕으로
									맛있고 건강한 제품을 통해
									언제나 고객의 행복과 함께하겠습니다.
								</p>
							</div>
							<div className="way_img">
								<img src="/images/management philosophy.PNG" alt="management philosophy"/>
							</div>
						</li>
						<li>
							<div className="way_text">
								<p>
									SPC그룹의 비전은 전 세계인에게 존경받고
									지속 성장 가능한
									경쟁력을 갖춘 글로벌 종합식품기업이 되는 것입니다.
								</p>
							</div>
							<div className="way_img">
								<img src="/images/vision.PNG" alt="vision"/>
							</div>
						</li>
						<li>
							<div className="way_text">
								<p>
									SPC그룹의 핵심가치는 SPC문화를 구성하는 신조이며
									최고의 기업으로 성장할 수 있는 성공 DNA입니다.
								</p>
							</div>
							<div className="way_img">
								<img src="/images/core value.PNG" alt="core value"/>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="way_mobile">
				<ul>
					<li>
						<a href="" className="active">
							<span>Management Philosophy</span>
							<p>경영철학</p>
						</a>
						<div className="way_mobile_tab active">
							<img src="/images/management philosophy.PNG" alt="management philosophy"/>
							<div className="inr">
								<p>
									SPC그룹은 창의적 도전정신을 바탕으로 <br/>
									맛있고 건강한 제품을 통해 <br/>
									언제나 고객의 행복과 함께하겠습니다.
								</p>
								<div className="button">
									<a href="">
										바로가기
									</a>
								</div>
							</div>
						</div>
					</li>
					<li>
						<a href="">
							<span>Vision</span>
							<p>비전</p>
						</a>
						<div className="way_mobile_tab">
							<img src="/images/vision.PNG" alt="vision"/>
							<div className="inr">
								<p>
									SPC그룹의 비전은 전 세계인에게 존경받고 <br/>
									지속 성장 가능한 <br/>
									경쟁력을 갖춘 글로벌 종합식품기업이 되는 것입니다.
								</p>
								<div className="button">
									<a href="">
										바로가기
									</a>
								</div>
							</div>
						</div>
					</li>
					<li>
						<a href="">
							<span>Core Value</span>
							<p>핵심가치</p>
						</a>
						<div className="way_mobile_tab">
							<img src="/images/core value.PNG" alt="core value"/>
							<div className="inr">
								<p>
									SPC그룹의 핵심가치는 SPC문화를 구성하는 신조이며 <br/>
									최고의 기업으로 성장할 수 있는 성공 DNA입니다.
								</p>
								<div className="button">
									<a href="">
										바로가기
									</a>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SPCway;