import { StarRate } from "@mui/icons-material";
import { Link } from "@mui/material";
import React from "react";

const ProductReview = () => {
  return (
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-5 m-auto">
      <ul className="offer-ul flex text-gray-800 no-underline mb-2">
        <li className="">
          <Link>Reviews</Link>
        </li>
      </ul>
      <div className="border rounded-lg p-2 mb-6">
        <div className="flex items-center ">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.penguinrandomhouse.com/cover/700jpg/9780593551998"
            alt=""
          />
          <div className="ml-5">
            <h4 className="text-gray-700 text-base font-semibold">
              Jhanker Mahbub{" "}
            </h4>
            <p className="text-gray-700 text-sm">3 May 2022</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis
          harum accusamus expedita repellat beatae! Animi vitae exercitationem
          soluta nostrum hic corporis cum ratione officia non. Quibusdam
          maiores, repellat accusantium voluptates quia molestiae deserunt quos
          repellendus ab exercitationem culpa, impedit delectus sit corporis
          magni consequatur. Eveniet adipisci ea rerum, animi doloribus quidem
          necessitatibus consectetur vero provident odio consequuntur quasi
          natus!
        </p>
        <p className="flex items-center mt-2">
          <StarRate fontSize="14" className="text-red-500 inline-block " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
        </p>
      </div>
      <div className="border rounded-lg p-2 mb-6">
        <div className="flex items-center ">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.penguinrandomhouse.com/cover/700jpg/9780593551998"
            alt=""
          />
          <div className="ml-5">
            <h4 className="text-gray-700 text-base font-semibold">
              Jhanker Mahbub{" "}
            </h4>
            <p className="text-gray-700 text-sm">3 May 2022</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis
          harum accusamus expedita repellat beatae! Animi vitae exercitationem
          soluta nostrum hic corporis cum ratione officia non. Quibusdam
          maiores, repellat accusantium voluptates quia molestiae deserunt quos
          repellendus ab exercitationem culpa, impedit delectus sit corporis
          magni consequatur. Eveniet adipisci ea rerum, animi doloribus quidem
          necessitatibus consectetur vero provident odio consequuntur quasi
          natus!
        </p>
        <p className="flex items-center mt-2">
          <StarRate fontSize="14" className="text-red-500 inline-block " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
        </p>
      </div>
      <div className="border rounded-lg p-2 mb-6">
        <div className="flex items-center ">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.penguinrandomhouse.com/cover/700jpg/9780593551998"
            alt=""
          />
          <div className="ml-5">
            <h4 className="text-gray-700 text-base font-semibold">
              Jhanker Mahbub{" "}
            </h4>
            <p className="text-gray-700 text-sm">3 May 2022</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis
          harum accusamus expedita repellat beatae! Animi vitae exercitationem
          soluta nostrum hic corporis cum ratione officia non. Quibusdam
          maiores, repellat accusantium voluptates quia molestiae deserunt quos
          repellendus ab exercitationem culpa, impedit delectus sit corporis
          magni consequatur. Eveniet adipisci ea rerum, animi doloribus quidem
          necessitatibus consectetur vero provident odio consequuntur quasi
          natus!
        </p>
        <p className="flex items-center mt-2">
          <StarRate fontSize="14" className="text-red-500 inline-block " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
        </p>
      </div>
    </div>
  );
};

export default ProductReview;