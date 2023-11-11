<?php
include("../../objects/DAO.php");

$method = $_SERVER['REQUEST_METHOD'];


if (strtoupper($method) == 'GET') {
    $CON = new DAO();
    $json = $CON->SelectPriorities();
    echo json_encode($json, http_response_code($json['status']));
}
