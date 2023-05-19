<script>
    import UnauthenticatedHeader from "../Components/unauthenticatedHeader.svelte";
  
  </script>
  
  
  <div class="mainContainer">
      <UnauthenticatedHeader/>

      <slot />
  </div>
  
  <style>
    .mainContainer {
      position: relative;
      min-height: 100vh;
      background: #1f2937;
      color: white;
      display: flex;
      flex-direction: column;
    }
  
  </style>
  