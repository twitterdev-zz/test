<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Check URL and Show Alert</title>
</head>
<body>

<script>
    // Function to check if the current URL matches the specified URL
    function checkURL() {
        var currentURL = window.location.href;
        var targetURL = 'https://twitterdev.github.io/test/test2.js';
        if (currentURL === targetURL) {
            alert('Login alert: Please login to access the content.');
        }
    }
    // Call the function when the page loads
    checkURL();
</script>

</body>
</html>
