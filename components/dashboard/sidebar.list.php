<?php
$page = $_SERVER['REQUEST_URI'];

?>

<ul class="nav flex-column mb-auto">
    <li class="nav-item">
        <a class="nav-link <?php if (strpos($page, "Dashboard") !== false) : ?> active  " aria-current="page" <?php else : ?>" <?php endif; ?> href="Dashboard.php">
            <i class="bi bi-speedometer2"></i>
            Dashboard
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link <?php if (strpos($page, "Todo") !== false) : ?> active  " aria-current="page" <?php else : ?>" <?php endif; ?>" href="Todo.php">
            <i class="bi bi-paperclip"></i>
            Tareas
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link <?php if (strpos($page, "Clients") !== false) : ?> active  " aria-current="page" <?php else : ?>" <?php endif; ?>" href="Clients.php">
            <i class="bi bi-people"></i>
            Clientes
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link <?php if (strpos($page, "Persons") !== false) : ?> active  " aria-current="page" <?php else : ?>" <?php endif; ?>" href="#">
            <i class="bi bi-person-badge"></i>
            Personas kyng
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link <?php if (strpos($page, "Bussiness") !== false) : ?> active  " aria-current="page" <?php else : ?>" <?php endif; ?>" href="#">
            <i class="bi bi-shop"></i>
            Negocios
        </a>
    </li>
</ul>