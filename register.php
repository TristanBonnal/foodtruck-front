<?php require 'templates/header.tpl.php' ?>
<h3 class="title">Renseignez les champs pour vous incrire</h3>
<form>
    <div class="mb-3">
        <label class="mb-2" for="InputEmail1" class="form-label">Adresse email</label>
        <input type="email" class="form-control" id="InputEmail1" >
    </div>
    <div class="mb-3">
        <label class="mb-2" for="lastname" class="form-label">Nom</label>
        <input type="text" class="form-control" id="lastname">
    </div>
    <div class="mb-3">
        <label class="mb-2" for="firstname" class="form-label">Prénom</label>
        <input type="text" class="form-control" id="firstname">
    </div>
    <div class="mb-3">
        <label class="mb-2" for="text" class="form-label">Mot de passe</label>
        <input type="password" class="form-control" id="password">
    </div>
    <div class="mb-3">
        <label class="mb-2" for="foodtruckName" class="form-label">Nom de votre FoodTruck</label>
        <input type="text" class="form-control" id="foodtruckName">
    </div>
    <button type="submit" class="btn btn-secondary">Valider</button>
</form>

<?php require 'templates/footer.tpl.php' ?>