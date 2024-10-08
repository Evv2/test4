< !DOCTYPE html >
    <html lang="ko">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>유즈소프트 채널 모의평가</title>
                    <style>
                        body {
                            background - color: #ffffff; /* 배경을 흰색으로 설정 */
                        font-family: '중명조', serif; /* 폰트를 중명조로 설정 */
                        color: #333;
                        margin: 0;
                        padding: 20px;
                        text-align: center;
        }

                        h1 {
                            font - weight: bold;
                        font-size: 24px;
                        margin-bottom: 30px;
        }

                        .quiz, .result {
                            background - color: #ffffff;
                        padding: 20px;
                        border: 1px solid #ccc;
                        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
                        display: inline-block;
                        width: 80%;
                        max-width: 800px;
                        text-align: left;
                        margin-bottom: 20px;
        }

                        label {
                            display: block;
                        margin: 10px 0;
        }

                        img {
                            max - width: 100%;
                        height: auto;
                        margin: 20px 0;
        }

                        button {
                            background - color: #fff;
                        border: 2px solid #000;
                        padding: 10px 20px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
        }

                        button:hover {
                            background - color: #e0e0e0;
        }

                        .result p {
                            font - size: 20px;
                        font-weight: bold;
                        text-align: center;
        }

                        .quiz h2 {
                            margin - bottom: 15px;
                        font-size: 18px;
                        font-weight: bold;
                        border-bottom: 1px solid #000;
                        padding-bottom: 5px;
        }
                    </style>
</head>
                <body>

                    <h1>유즈소프트 채널 모의평가</h1>

                    <div class="quiz">
                        <h2>1. 다음 중 세계 최고의 게임사는?</h2>
                        <img src="images/question1.png" alt="문제 1 이미지">
                            <label><input type="radio" name="q1" value="1"> 유즈소프트</label><br>
                                <label><input type="radio" name="q1" value="2"> 페이버릿</label><br>
                                    <label><input type="radio" name="q1" value="3"> 키</label><br>
                                        <label><input type="radio" name="q1" value="4"> 훅소프트</label><br>
                                            <label><input type="radio" name="q1" value="5"> 마도소프트</label><br>

                                                <h2>2. 다음 중 세계 최고의 라이터는?</h2>
                                                <img src="images/question2.png" alt="문제 2 이미지">
                                                    <label><input type="radio" name="q2" value="1"> 유키토</label><br>
                                                        <label><input type="radio" name="q2" value="2"> 루쿠루</label><br>
                                                            <label><input type="radio" name="q2" value="3"> 나카히로</label><br>
                                                                <label><input type="radio" name="q2" value="4"> 마에다 준</label><br>
                                                                    <label><input type="radio" name="q2" value="5"> 스카지</label><br>

                                                                        <button onclick="submitQuiz()">제출하기</button>
</div>

                                                                        <div class="result">
                                                                            <p id="score"></p>
                                                                            <button onclick="restartQuiz()">다시 테스트 하기</button>
                                                                        </div>

                                                                        <script>
                                                                            function submitQuiz() {
        const answer1 = document.querySelector('input[name="q1"]:checked');
                                                                            const answer2 = document.querySelector('input[name="q2"]:checked');

                                                                            if (!answer1 || !answer2) {
                                                                                alert("모든 문항에 답해주세요!");
                                                                            return;
        }

                                                                            let score = 0;
                                                                            if (answer1.value === "2") score++;
                                                                            if (answer2.value === "1") score++;

                                                                            let resultText = "";
                                                                            if (score === 0) {
                                                                                resultText = "허접";
        } else if (score === 1) {
                                                                                resultText = "중수";
        } else if (score === 2) {
                                                                                resultText = "고수";
        }

                                                                            document.getElementById("score").innerText = `정답 개수: ${score} / 2 - ${resultText}`;

                                                                            document.querySelector('.quiz').style.display = 'none';
                                                                            document.querySelector('.result').style.display = 'block';
    }

                                                                            function restartQuiz() {
                                                                                document.querySelector('.quiz').style.display = 'block';
                                                                            document.querySelector('.result').style.display = 'none';
        document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    }
                                                                        </script>

</body>
</html>
