// Daum 우편번호찾기 API
function daumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 각 값 저장
            document.getElementById('userPost').value = data.zonecode;
            document.getElementById('userAddressA').value = data.roadAddress;

            // 상세주소 키 입력 이동
            document.getElementById('userAddressDetail').focus();
        }
    }).open();
}


// TODO : 결제 값 가져와야함
// 결제 스크립트
function cancelPayment() {
    const payment = alert("정말 결제를 취소하시겠습니까? 결제를 취소할 경우 모든 입력값을 잃어버리게 됩니다")
    if (payment) {
        location.href = "/resevation/reservationRead"
    }
}

$("#paymentBtn").on("click", function () {
    var userId = $("#user_id").val()
    console.log(userId)

    var userName = $("#user_name").val()
    console.log(userName)

    // var userAddress = $("#userAddress").val()
    var userAddress = $("#user_address").val() + $("#user_address_detail").val()
    console.log(userAddress)

    var userPhone = $("#user_phone1").val() + $("#user_phone2").val()
    console.log(userPhone)

    // var productName = $("#service_name").val() 
    var productName = '상품이름'
    console.log(productName)

    // var productCost = $("#service_price").val() + $("#service_price").val()
    var productCost = 300
    console.log(productCost)

    var merchant_uid = "O" + new Date().getTime() // 고유 주문번호 생성 
    console.log(merchant_uid)

    var IMP = window.IMP
    IMP.init('imp52301113') // 고객사 식별코드 입력 
    // request_pay 결제를 요청하는 함수
    IMP.request_pay({
        pg: "html5_inicis",             // 등록된 pg사 (적용된 pg사는 KG이니시스)
        pay_method: "card",             // 결제방식: card(신용카드), trans(실시간계좌이체), vbank(가상계좌), phone(소액결제)
        merchant_uid: merchant_uid,     // 주문번호
        name: productName,              // 상품명
        amount: productCost,            // 금액
        buyer_name: userName,           // 주문자
        buyer_tel: userPhone,           // 전화번호 (필수입력)
        buyer_addr: userAddress,        // 주소
        buyer_postcode: userPost        // 우편번호
    }, function (res) {
        // 결제 성공
        if (res.success) {
            axios({
                method: "post",
                url: `/payment/validation/${rsp.imp_uid}`
                // DB 연동, 저장 필요
                // 성공시 페이지 이동 필요
            })
        } else
            alert("결제 실패..." + response.error_msg)
            // 실패시 페이지 이동 필요
    })
})