import * as React from "react";

import "./loading.scss";

export const Loading: React.FunctionComponent = () => {
  return (
    <section className="loading">
      <svg xmlns="http://www.w3.org/2000/svg" width="130" className="loading__logo">
        <g fillRule="nonzero" fill="none">
          <path fill="#FC0" d="M.507 72.213h129.162v28.555H.507z"/>
          <path d="M125.027 86.01v1.542c0 5.335-2.22 7.955-6.285 7.955-2.68 0-4.404-1.357-5.203-3.023-.094-.065-.864.308-.864.86.084.656.401 1.26.894 1.7.993.995 2.77 1.756 5.173 1.756 4.964 0 7.794-3.177 7.794-9.313V85.23c0-5.828-3.048-9.005-7.606-9.005-4.006 0-6.9 2.983-6.9 6.723v.188c0 3.575 2.646 5.967 6.712 5.967a7.66 7.66 0 006.285-3.053m-6.161 1.76c-3.356 0-5.357-1.79-5.357-4.783v-.184c0-2.983 2.28-5.31 5.461-5.31 3.475 0 5.729 2.486 6.007 6.96-1.018 1.816-3.39 3.332-6.13 3.332m-12.63 8.791h.218c.432 0 .675-.219.675-.711V77.21c0-.498-.243-.741-.704-.741h-.65a2.553 2.553 0 01-2.557 2.441 2.084 2.084 0 01-1.758-.776.905.905 0 00-.496.836c-.002.328.133.641.372.865a2.386 2.386 0 001.757.617 2.848 2.848 0 002.483-1.328v16.781c0 .497.218.711.645.711m-14.104-7.065h6.806c.462 0 .705-.184.705-.587v-.154c0-.433-.243-.617-.705-.617h-6.77c-.468 0-.71.184-.71.617v.154c0 .403.242.587.71.587M73.68 95.109V77.866h4.095c5.853 0 9.274 3.272 9.274 8.607 0 5.43-3.391 8.636-9.333 8.636H73.68zm-.616 1.358h4.557c6.9 0 11.026-3.794 11.026-10.024 0-6.23-4.03-9.944-10.872-9.944h-4.71a.883.883 0 00-.894.924v18.11a.886.886 0 00.893.924m-6.95.094h.219c.426 0 .645-.218.645-.71V77.124c0-.462-.219-.71-.645-.71h-.219c-.432 0-.645.248-.645.71V95.85c0 .497.213.711.645.711m-12.505.03c.645 0 .864-.184.993-.557l7.605-19.157c.095-.244-1.26-1.05-1.752.278l-6.87 17.71-6.842-17.71c-.496-1.328-1.876-.497-1.817-.278l7.65 19.157c.154.373.368.557 1.048.557m-19.912-1.138c-4.9 0-8.256-3.8-8.256-8.95 0-5.152 3.346-8.995 8.256-8.995s8.25 3.853 8.25 8.975c0 5.121-3.325 8.95-8.22 8.95m-.065 1.322c5.883 0 9.86-4.316 9.86-10.302 0-5.987-3.942-10.273-9.795-10.273s-9.86 4.351-9.86 10.333c0 5.981 3.947 10.242 9.795 10.242m-20.175 0c3.019 0 5.267-1.138 6.454-2.342a4.143 4.143 0 001.345-2.356.964.964 0 00-.993-.895c-.74 2.222-3.053 4.29-6.716 4.29-4.965 0-8.316-3.798-8.316-8.95 0-5.15 3.322-8.994 8.187-8.994 3.048 0 5.545 1.601 6.592 3.824a.908.908 0 00.894-.925c-.131-.727-.5-1.39-1.048-1.885-1.171-1.168-3.266-2.342-6.374-2.342-5.853 0-9.889 4.321-9.889 10.333 0 6.01 3.942 10.242 9.854 10.242M116.473 44.826v10.223c0 4.186 1.807 6.399 5.784 6.399 2.85 0 4.497-1.452 4.497-2.939 0-1.248-.993-1.81-1.122-1.69a3.275 3.275 0 01-2.73 1.367c-1.891 0-2.572-1.168-2.572-3.58v-9.78h4.379c1.241 0 1.728-.497 1.728-1.526v-.284c0-.964-.442-1.447-1.688-1.447h-4.379v-2.983c0-1.492-.685-1.894-1.727-1.894h-.403c-1.087 0-1.767.527-1.767 1.894v2.983h-1.41c-1.246 0-1.727.497-1.727 1.492v.283c0 .965.496 1.492 1.727 1.492l1.41-.01zm-13.339 16.582c4.964 0 8.032-2.377 8.032-6.076 0-4.186-4.135-5.071-7.109-5.718-3.132-.681-4.82-1.084-4.82-2.854 0-1.61 1.445-2.655 4.175-2.655a6.946 6.946 0 015.664 2.735c.085.12 1.609-.607 1.609-1.85 0-1.815-2.482-3.903-7.447-3.903-4.7 0-7.714 2.451-7.714 6.076 0 4.102 3.936 4.972 6.79 5.589 3.173.686 4.965 1.049 4.965 3.018 0 1.61-1.524 2.62-4.26 2.62-3.047 0-5.217-1.248-6.507-2.899-.858.2-1.49.931-1.564 1.81 0 1.85 2.77 4.107 8.156 4.107M77.751 44.503c-.119-2.536-1.325-3.143-2.482-3.143-.804 0-1.444.324-1.444.443v17.402c0 1.452.724 1.895 1.767 1.895h.442c.993 0 1.767-.443 1.767-1.895V47.968a5.842 5.842 0 015.426-3.38c2.81 0 4.468 1.988 4.468 5.27v9.333c0 1.451.725 1.894 1.767 1.894h.442c.993 0 1.767-.443 1.767-1.894v-9.815c0-4.789-2.368-8.289-7.47-8.289a7.443 7.443 0 00-6.43 3.42M67.7 61.1h.402c1.042 0 1.767-.443 1.767-1.895v-15.91c0-1.492-.725-1.935-1.767-1.935h-.402c-1.043 0-1.807.498-1.807 1.935v15.91c0 1.452.764 1.895 1.807 1.895m.203-23.663c1.524 0 2.368-.765 2.368-2.212s-.844-2.253-2.333-2.253c-1.49 0-2.408.806-2.408 2.253s.884 2.212 2.373 2.212M57.94 49.296h-.521c-8.723.16-12.982 2.088-12.982 6.558 0 3.297 2.452 5.51 6.593 5.51 2.978 0 5.5-1.283 6.95-3.377.04 2.372 1.042 3.138 2.447 3.138.725 0 1.45-.244 1.45-.443V48.814c0-4.913-2.979-7.727-8.44-7.727-5.46 0-8.275 2.774-8.275 4.624 0 1.934 2.452 1.989 2.452 1.934.884-1.77 2.611-3.301 5.545-3.301 3.093 0 4.78 1.61 4.78 4.55v.402zm-5.957 9.213c-2.289 0-3.659-1.089-3.659-2.819 0-2.615 2.894-3.66 8.519-3.863l1.087-.04v1.492c0 3.058-2.482 5.23-5.957 5.23M37.684 42.25a9.634 9.634 0 00-4.621-1.163c-4.78 0-8.276 3.257-8.276 7.319 0 3.018 1.986 5.435 5.064 6.439a2.776 2.776 0 00-1.102 2.093 2.284 2.284 0 00.804 1.815c-3.535.602-6.186 2.486-6.186 5.31 0 3.62 3.014 5.35 9.522 5.35 6.389 0 10.122-2.252 10.122-5.917 0-3.177-2.894-4.544-5.624-5.27-3.376-.845-5.223-.965-5.223-2.213-.01-.256.06-.51.199-.726.24.037.482.052.725.045 4.9 0 8.36-2.983 8.36-7.045a6.574 6.574 0 00-1.649-4.346l3.252-3.381c.124-.08-.561-1.69-2.05-1.69-.993 0-1.644.497-2.289 1.53l-1.028 1.85zm-4.582 10.442c-2.65 0-4.537-1.775-4.537-4.39 0-2.616 1.847-4.386 4.468-4.386 2.73 0 4.582 1.81 4.582 4.386 0 2.575-1.852 4.39-4.503 4.39m.12 7.806c2.854.721 5.957 1.124 5.957 3.098 0 1.974-2.289 3.018-6.186 3.018-3.817 0-5.788-.97-5.788-2.695 0-2.053 2.775-3.222 6.026-3.42M17.276 49.295h-.496c-8.718.16-12.977 2.088-12.977 6.558 0 3.297 2.452 5.51 6.593 5.51 2.978 0 5.5-1.283 6.95-3.377.04 2.372 1.042 3.138 2.447 3.138.725 0 1.45-.244 1.45-.443V48.814c0-4.913-2.979-7.727-8.44-7.727-5.46 0-8.275 2.774-8.275 4.624 0 1.934 2.452 1.989 2.452 1.934a5.837 5.837 0 015.54-3.301c3.098 0 4.781 1.61 4.781 4.55l-.025.402zm-5.957 9.213c-2.289 0-3.659-1.089-3.659-2.819 0-2.615 2.894-3.66 8.519-3.863l1.082-.04v1.492c0 3.058-2.482 5.23-5.957 5.23M111.087 20.12h14.223c.923 0 1.206-.324 1.206-1.17v-.317c0-5.798-3.698-9.74-9.283-9.74-5.704 0-9.884 4.385-9.884 10.262 0 6.036 4.1 10.098 10.206 10.098 5.263 0 8.236-2.695 8.236-4.385s-2.01-2.054-2.09-1.99c-.993 1.726-2.69 3.218-6.066 3.218-3.654 0-6.265-2.456-6.548-5.997m0-2.694c.496-3.217 2.934-5.515 6.106-5.515 3.172 0 5.262 2.173 5.46 5.515h-11.566zM95.34 12.616V22.86c0 4.182 1.807 6.394 5.783 6.394 2.855 0 4.503-1.447 4.503-2.938 0-1.243-.993-1.81-1.127-1.69a3.26 3.26 0 01-2.73 1.371c-1.892 0-2.572-1.168-2.572-3.58v-9.78h4.379c1.246 0 1.727-.522 1.727-1.531v-.279c0-.994-.441-1.451-1.687-1.451h-4.374V6.406c0-1.491-.685-1.89-1.728-1.89h-.402c-1.087 0-1.767.498-1.767 1.89V9.39H93.93c-1.24 0-1.727.528-1.727 1.492v.279c0 .97.496 1.491 1.727 1.491l1.41-.035zM86.618 28.89h.402c1.047 0 1.767-.437 1.767-1.89V11.09c0-1.492-.72-1.93-1.767-1.93h-.402c-1.043 0-1.807.498-1.807 1.93V27c0 1.453.764 1.89 1.807 1.89m.213-23.657c1.53 0 2.373-.766 2.373-2.213S88.36.768 86.871.768c-1.49 0-2.413.8-2.413 2.252 0 1.452.884 2.213 2.373 2.213m-20.78 7.08c-.12-2.536-1.326-3.137-2.483-3.137-.804 0-1.444.323-1.444.442v17.403c0 1.452.725 1.89 1.767 1.89h.442c.993 0 1.767-.438 1.767-1.89V15.774a5.837 5.837 0 015.416-3.401c2.81 0 4.468 2.013 4.468 5.275v9.353c0 1.452.725 1.89 1.767 1.89h.442c.993 0 1.768-.438 1.768-1.89v-9.82c0-4.788-2.368-8.289-7.447-8.289a7.443 7.443 0 00-6.453 3.421M46.576 29.218c6.91 0 10.643-3.903 10.643-11.147V4.417c0-1.287-.56-1.89-1.723-1.89h-.645c-1.162 0-1.767.603-1.767 1.89v13.57c0 5.07-2.09 7.567-6.454 7.567-4.299 0-6.453-2.576-6.453-7.528V4.417c0-1.248-.601-1.89-1.807-1.89h-.561c-1.127 0-1.773.642-1.773 1.89V18.14c0 7.24 3.659 11.064 10.57 11.064" fill="#231F20"/>
        </g>
      </svg>

      <div className="loading__caption">{"Loading..."}</div>
    </section>
  )
}