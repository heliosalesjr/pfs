"use client"; // 🔹 Garante que o componente roda no Client

import React, { useEffect, useState } from "react";
import data from "@/data/data.json";
import { Box, Container, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import DataBox from "@/components/DataBox";

const Planet = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [slug, setSlug] = useState<string | null>(null);
  const [planet, setPlanet] = useState<any>(null);

  // 🔹 Pegando o `slug` corretamente
  useEffect(() => {
    params.then((resolvedParams) => {
      const slugValue = resolvedParams.slug;
      setSlug(slugValue);
      setPlanet(data[Number(slugValue)]);
    });
  }, [params]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!planet) return <Typography>Loading...</Typography>; // 🔹 Evita erro de renderização antes de carregar

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingY: 4,
        }}
      >
        {/* 🌍 Seção Principal */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? 3 : 8,
            margin: isMobile ? "10vh 0" : "15vh 0",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Image
            src={planet.images.planet}
            alt={planet.name}
            width={isMobile ? 250 : 350}
            height={isMobile ? 250 : 350}
            style={{ maxWidth: "100%", height: "auto" }}
          />

          <Box sx={{ width: isMobile ? "100%" : "60%" }}>
            <Typography variant="h3" sx={{ fontSize: isMobile ? "2rem" : "3rem", fontWeight: "bold" }}>
              {planet.name}
            </Typography>
            <Typography sx={{ fontSize: isMobile ? "0.9rem" : "1.1rem", marginBottom: 2 }}>
              {planet.overview.content}
            </Typography>
            <Typography>
              Source:{" "}
              <Link href={planet.structure.source} target="_blank" rel="noopener">
                Wikipedia
              </Link>
            </Typography>
          </Box>
        </Box>

        {/* 🛰️ Seção com Dados */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
          }}
        >
          <DataBox title="Rotation Time" data={planet.rotation} />
          <DataBox title="Revolution Time" data={planet.revolution} />
          <DataBox title="Radius" data={planet.radius} />
          <DataBox title="Average Temperature" data={planet.temperature} />
        </Box>
      </Container>
    </Box>
  );
};

export default Planet;
