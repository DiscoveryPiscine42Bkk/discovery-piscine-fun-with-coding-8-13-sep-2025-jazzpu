function calculate() {
            let left = document.getElementById("left").value.trim();
            let right = document.getElementById("right").value.trim();
            let op = document.getElementById("operator").value;

            if (!/^\d+$/.test(left) || !/^\d+$/.test(right)) {
                alert("Error :(");
                return;
            }

            left = parseInt(left, 10);
            right = parseInt(right, 10);

            if ((op === "/" || op === "%") && right === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }

            let result;
            switch (op) {
                case "+": result = left + right; break;
                case "-": result = left - right; break;
                case "*": result = left * right; break;
                case "/": result = left / right; break;
                case "%": result = left % right; break;
            }

            alert(result);
            console.log(result);
        }

        setInterval(function() {
            alert("Please, use me...");
        }, 30000);