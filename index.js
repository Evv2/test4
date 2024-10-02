< !DOCTYPE html >
    <html lang="ko">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>유즈소프트 채널 모의평가</title>
                    <style>
                        body {
                            font - family: Arial, sans-serif;
                        text-align: center;
        }
                        h1 {
                            margin - top: 50px;
        }
                        .quiz {
                            margin: 20px auto;
                        max-width: 500px;
                        text-align: left;
        }
                        .quiz button {
                            margin - top: 20px;
        }
                        .result {
                            display: none;
        }
                        .result p {
                            font - size: 24px;
                        font-weight: bold;
        }
                    </style>
</head>
                <body>

                    <h1>유즈소프트 채널 모의평가</h1>

                    <div class="quiz">
                        <h2>1. 다음 중 세계 최고의 게임사는?</h2>
                        <label><input type="radio" name="q1" value="1"> 유즈소프트</label><br>
                            <label><input type="radio" name="q1" value="2"> 페이버릿</label><br>
                                <label><input type="radio" name="q1" value="3"> 키</label><br>
                                    <label><input type="radio" name="q1" value="4"> 훅소프트</label><br>
                                        <label><input type="radio" name="q1" value="5"> 마도소프트</label><br>

                                            <h2>2. 다음 중 세계 최고의 라이터는?</h2>
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
