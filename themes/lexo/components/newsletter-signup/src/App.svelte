<script lang="ts">
  let submitting = false;
  let success = false;

  async function handleSubmit(event) {
    event.preventDefault();
    submitting = true;
    const data = new FormData(event.target);
    const result = await fetch(
      "https://app.convertkit.com/forms/2435121/subscriptions",
      {
        method: "post",
        body: data,
      }
    );
    submitting = false;
    success = true;
  }
</script>

{#if !success}
  <form on:submit={handleSubmit}>
    <input
      type="text"
      name="fields[first_name]"
      placeholder="First name"
      required
      aria-required="true"
      aria-label="First name"
      disabled={submitting}
    />
    <input
      type="email"
      name="email_address"
      placeholder="Email address"
      required
      aria-required="true"
      aria-label="Email address"
      disabled={submitting}
    />
    <button type="submit" disabled={submitting}>Subscribe</button>
  </form>
{/if}
{#if success}
  <div>
    <p class="check">✅</p>
    <p>
      Awesome! You'll get a confirmation mail to really make sure you want this.
    </p>
  </div>
{/if}

<style>
  form {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 40rem) {
    form {
      flex-direction: column;
    }
  }

  form * {
    margin: 0.25rem;
  }

  input,
  button {
    border-radius: 5px;
    font-size: 0.8rem;
    line-height: 1.68rem;
    padding: 0.25rem 0.5rem;
  }

  button {
    padding: 0.3rem 0.8rem;
    background: #1677be;
    color: white;
    border: none;
  }
  button:hover {
    cursor: pointer;
    background: #1273ba;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .check {
    font-size: 2rem;
    margin-bottom: 0.2rem;
  }
</style>
