< !DOCTYPE html >
    <html lang="ko">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>내 첫 웹페이지</title>
                    <style>
                        body {
                            font - family: Arial, sans-serif;
        }
                        button {
                            padding: 10px 20px;
                        background-color: #007BFF;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
        }
                    </style>
</head>
                <body>
                    <h1>버튼을 클릭해 보세요!</h1>
                    <button onclick="sayHello()">클릭</button>

                    <script>
                        function sayHello() {
                            alert('안녕하세요!');
        }
                    </script>
                </body>
</html>
