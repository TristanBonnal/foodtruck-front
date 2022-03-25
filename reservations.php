<?php require 'templates/header.tpl.php' ?>
<h3 class="title">Vos réservations à venir</h3>
<p>Vous n'avez pas encore effectué de réservations</p>
<hr>
<h3 class="title">Effectuez une nouvelle réservation</h3>
<form>
    <div class="mb-3">
    <label class="mb-2" for="spot" class="form-label">Emplacement</label>
    <select class="form-select">
            <option selected>Choisissez un emplacement</option>
            <?php for ($i = 1; $i <= 7; $i++): ?>
                <option value="1"><?= $i ?></option>
            <?php endfor ?>
    </select>
    </div>
    <div class="mb-3">
        <label class="mb-2" for="bookedDate" class="form-label">Date souhaitée</label>
        <input type="date" class="form-control" id="bookedDate">
    </div>
    <button type="submit" class="btn btn-secondary">Valider</button>
</form>

<?php require 'templates/footer.tpl.php' ?>
