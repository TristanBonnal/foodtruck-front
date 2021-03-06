<?php require 'templates/header.tpl.php' ?>

<main class="text-center" class="px-3">
    <section id="introSection">
        <h1 class="title">Réservez en quelques clics !</h1>
        <p class="lead">Une fois inscrit, choisissez l'un de nos 7 emplacements, bénéfieciez d'une place par semaine et par foodtruck.</p>
        <p class="lead">
            <a href="" class="btn btn-lg btn-secondary fw-bold border-white bg-white" id="reservationButton">Réservation</a>
        </p>
    </section>
    <section class="hidden" id="reservationSection">
        <h5 id="welcome"></h5>

        <h3 class="title">Vos réservations</h3>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Date réservation</th>
                    <th scope="col">Emplacement</th>
                    <th scope="col">Référence</th>
                </tr>
            </thead>
            <tbody id="reservationsRow">
            </tbody>
        </table>
        <h3 class="title mt-5">Effectuez une nouvelle réservation</h3>
        <form id="reservationForm">
            <div class="mb-3">
            <label class="mb-2" for="spot" class="form-label">Emplacement</label>
            <select class="form-select" id="spot">
                <option selected>Choisissez un emplacement</option>
                <?php for ($i = 1; $i <= 7; $i++): ?>
                    <option value="<?= $i ?>"><?= $i ?></option>
                <?php endfor ?>
            </select>
            </div>
            <div class="mb-3">
                <label class="mb-2" for="bookedDate" class="form-label">Date souhaitée</label>
                <input type="date" class="form-control mb-3" id="bookedDate">
            </div>
            <button type="submit" class="btn btn-lg btn-secondary fw-bold border-white" id="addReservationButton">Réserver</button>
        </form>
    </section>
</main>

<?php require 'templates/footer.tpl.php' ?>


