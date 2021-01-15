import Swal from "sweetalert2";

export const showSuccess = (message) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1000,
  });
};

export const showError = (message) => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 1000,
  });
};

export const showConfirmation = (message) => {
  Swal.fire({
    title: message,
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: `Remove`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      showSuccess("Removed Successfully!!")
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};
