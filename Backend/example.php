<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        // example of foreach in php
        $arr = array("apple", "banana", "cherry");
        $link = array("Home", "Services", "About");
        foreach($arr as $value){
            echo "$value <br>";
        }

        foreach($link as $value){
            echo "<a href='#'>$value</a> <br>";
        }
    ?>
</body>
</html>