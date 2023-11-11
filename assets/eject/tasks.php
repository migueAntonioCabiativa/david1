<?php
include("../../objects/DAO.php");

$method = $_SERVER['REQUEST_METHOD'];


if (strtoupper($method) == 'GET') {
    $CON = new DAO();
    $json = $CON->SelectTasks();
    echo json_encode($json, http_response_code($json['status']));
}


if (strtoupper($method) == 'POST') {
    $_POST = json_decode(file_get_contents("php://input"), true);

    if (isset($_POST)) {
        $errorMessage = "";
        if ($errorMessage != "") {
            $json = array(
                'status' => 404,
                'message' => 'Error-> Faltan los siguientes parametros:' . $errorMessage
            );
        } else {
            $CON = new DAO();
            //$json = $CON->InsertTasks($_POST);
            $json = array(
                'status' => 200,
                'message' => 'OK'
            );
        }

        echo json_encode($json, http_response_code($json['status']));
    }
}

if (strtoupper($method) == 'PUT') {
    $_PUT = json_decode(file_get_contents("php://input"), true);
    if (isset($_PUT)) {
        $errorMessage = "";
        if (!isset($_PUT['TaskName']) || $_PUT['TaskName'] == "") {
            $errorMessage .=  " Nombre de tarea,";
        }
        if (!isset($_PUT['Priority'])) {
            $errorMessage .= " Prioridad,";
        }
        if (!isset($_PUT['Person'])) {
            $errorMessage .=  " Person,";
        }
        if ($errorMessage != "") {
            $json = array(
                'status' => 404,
                'message' => 'Error-> Faltan los siguientes parametros:' . $errorMessage
            );
        } else {
            $CON = new DAO();
            $json = $CON->InsertTasks($_PUT);
        }
    } else {
        $json = array(
            'status' => 400,
            'message' => 'Paila'
        );
    }
    echo json_encode($json, http_response_code($json['status']));
}


if (strtoupper($method) == 'DELETE') {
    $_DELETE = json_decode(file_get_contents("php://input"), true);

    if (isset($_DELETE)) {
        if (!isset($_DELETE['taskId']) || $_DELETE['taskId'] == "") {
            $json = array(
                'status' => 404,
                'message' => 'No hay Id especificado'
            );
        } else {
            $CON = new DAO();
            $json = $CON->DeleteTask($_DELETE['taskId']);
        }
    } else {

        $json = array(
            'status' => 400,
            'message' => 'No hay parametros'
        );
    }
    echo json_encode($json, http_response_code($json['status']));
}
