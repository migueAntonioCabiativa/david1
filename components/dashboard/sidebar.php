<?php


?>

<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style="z-index: 10;">
    <div class="d-flex flex-column flex-shrink-0 p-3 h-100">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
            <img src="assets/logos/imagotipo/HORIZONTAL_NEGRO.png" class="img m-auto" alt="" width="70%">
        </a>
        <hr>
        <?php require("components/dashboard/sidebar.list.php") ?>
        <hr>
        <div class="dropdown">
            <a href="#" class="d-flex text-black text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                <strong>mdo</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>
    </div>
</nav>