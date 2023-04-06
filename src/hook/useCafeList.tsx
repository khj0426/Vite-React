// |Good parts:
// |- The code is well-structured and easy to read.
// |- The use of React hooks (useState and useEffect) makes the code more concise and easier to manage.
// |- The code is modular and can be easily reused in other components or functions.
// |- The use of the optional chaining operator (?.) makes the code more robust and prevents potential errors.
// |

// |Bad parts:
// |- The code does not handle errors or edge cases, such as when the user denies permission to access their location or when the geocoding service fails to return a result.
// |- The code could benefit from more comments or documentation to explain the purpose of each function and variable.
// |

//현위치의 위도 경도를 반환
import { useState, useEffect } from 'react';
import type { resultInterface } from '../components/types/Location/Address';
const useCurrentPos = () => {
  const [error, setError] = useState<kakao.maps.services.Status>();
  const [currentLocation, setCurrentLocation] = useState<GeolocationPosition>();
  const [resultAddress, setResultAddress] = useState<resultInterface>();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setCurrentLocation(pos);
      });
    }
  };

  const getAddressFromCoordinate = () => {
    //좌표를 주소로 변환하는 함수
    const $latitude = currentLocation?.coords?.latitude;
    const $longitude = currentLocation?.coords?.longitude;

    if (!($latitude && $longitude)) {
      return;
    }

    const $geoCoder = new kakao.maps.services.Geocoder();
    $geoCoder.coord2Address($longitude, $latitude, (result, status) => {
      setResultAddress(result);
      if (status !== kakao.maps.services.Status.OK) {
        setError(status);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getAddressFromCoordinate();
  }, [currentLocation && true]);

  if (error) {
    return { error };
  }
  return { resultAddress, currentLocation };
};

export default useCurrentPos;
